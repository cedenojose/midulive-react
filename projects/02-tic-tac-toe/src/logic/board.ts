import { WINNER_COMBOS } from "../constants";
import { Board } from "../interface";
export const checkWinner = (boardToCheck: Board[]): Board => {
  // Revisa todas las combinaciones ganadoras
  // para ver si 'X' u 'O' gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard: Board[]) => {
  // Revisar si hay empate
  // Si no hay mas espacios vacios en el tablero
  return newBoard.every((square: Board) => square !== null);
};