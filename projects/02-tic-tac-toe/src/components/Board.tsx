import { useState } from "react";
import { TURNS } from "../constants";
import { Board, Winner } from "../interface";
import { checkEndGame, checkWinner } from "../logic/board";
import confetti from "canvas-confetti";
import Game from "./Game";
import Square from "./Square";
import WinnerModal from "./WinnerModal";
import { resetGameStorage, saveGameStorage } from "../logic/storage";
const Board = () => {
  const [board, setBoard] = useState<Board[]>((): Board[] => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState<string>(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    console.log(turnFromStorage);
    return turnFromStorage ?? TURNS.X;
  });

  // null = no hay ganador
  // false = empate
  // 'x' u 'o' = winner
  const [winner, setWinner] = useState<Winner>(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  const updateBoard = (index: number): void => {
    console.log("array de posiciones ", board);
    // No actualizar si la posicion tiene algo
    if (board[index] || winner) {
      return;
    }

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar partida en localstorage
    saveGameStorage({ board: newBoard, turn: newTurn });

    // Revisa si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
      // Check if game is over
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <Game
        board={board}
        updateBoard={updateBoard}
      />
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  );
};
export default Board;
