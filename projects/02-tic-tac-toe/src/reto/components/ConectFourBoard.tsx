import { useState } from "react";
import { Board, Winner } from "../interface";
import { TURNS, BOARD_SIZE } from "../constants";
import BoardComponent from "./Board";
import Turn from "./Turn";
import WinnerModal from "./WinnerModal";
import { checkWinner, checkEndGame } from "../logic/board";
import styles from "./ConectFourdBoard.module.css";
import { resetGameStorage, saveGameStorage } from "../logic/storage";

const ConectFourBoard = () => {
  const [board, setBoard] = useState<Board[][]>((): Board[][] => {
    const boardFromStorage = window.localStorage.getItem("boardConectFour");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array.from({ length: BOARD_SIZE.rows }, () =>
          Array(BOARD_SIZE.columns).fill(null)
        );
  });

  const [turn, setTurn] = useState<string>(TURNS.playerOne);

  // null = aun no hay ganador
  // false = empate
  // string = ganador
  const [winner, setWinner] = useState<Winner>(null);

  const updateBoard = (column: number) => {
    // Colocar la ficha en la ultima fila disponible
    let newRow = 0;
    for (let i = BOARD_SIZE.rows - 1; i >= 0; i--) {
      const casilla = board[i][column];
      if (!casilla) {
        newRow = i;
        break;
      }
    }

    // Verificar que la casilla esta ocupada
    if (board[newRow][column] || winner) {
      return;
    }

    // Agregar la ficha
    const newBoard = [...board];
    newBoard[newRow][column] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn =
      turn === TURNS.playerOne ? TURNS.playerTwo : TURNS.playerOne;
    setTurn(newTurn);

    // Guardar en localStorage
    saveGameStorage(newBoard, newTurn);

    // Verificar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      // Si el juego termino en empate
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = (): void => {
    setBoard(
      Array.from({ length: BOARD_SIZE.rows }, () =>
        Array(BOARD_SIZE.columns).fill(null)
      )
    );
    setTurn(TURNS.playerOne);
    setWinner(null);

    resetGameStorage();
  };

  return (
    <main className={styles.main}>
      <BoardComponent
        board={board}
        updateBoard={updateBoard}
        resetGame={resetGame}
      />
      <Turn turn={turn} />
      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  );
};
export default ConectFourBoard;
