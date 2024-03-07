import { Board, Winner } from "../interface";
import { BOARD_SIZE } from "../constants";

export const checkWinner = (board: Board[][]): Winner => {
  for (let i = BOARD_SIZE.rows - 1; i >= 0; i--) {

    for (let j = BOARD_SIZE.columns - 1; j >= 0; j--) {
      // Verificar horizontalmente (-)
      if (
        j - 3 >= 0 &&
        board[i][j] &&
        board[i][j] === board[i][j - 1] &&
        board[i][j] === board[i][j - 2] &&
        board[i][j] === board[i][j - 3]
      ) {
        return board[i][j];

      }
      // Verificar verticalmente (|)
      else if (
        i - 3 >= 0 &&
        board[i][j] &&
        board[i][j] === board[i - 1][j] &&
        board[i][j] === board[i - 2][j] &&
        board[i][j] === board[i - 3][j]
      ) {
        return board[i][j];

      }
      // Verificar la diagonal (/) hacia arriba la derecha (45°)
      else if (
        i + 3 < BOARD_SIZE.rows &&
        j - 3 >= 0 &&
        board[i][j] &&
        board[i][j] === board[i + 1][j - 1] &&
        board[i][j] === board[i + 2][j - 2] &&
        board[i][j] === board[i + 3][j - 3]
      ) {
        return board[i][j];

      }
      // Verificar la diagonal (\) hacia arriba la izquierda (135°)
      else if (
        i - 3 >= 0 &&
        j - 3 >= 0 &&
        board[i][j] &&
        board[i][j] === board[i - 1][j - 1] &&
        board[i][j] === board[i - 2][j - 2] &&
        board[i][j] === board[i - 3][j - 3]
      ) {
        return board[i][j];

      }
    }
  }
  return null;
};

export const checkEndGame = (board: Board[][]) => {
  return board.every((row) => row.every((square) => square !== null));
};
