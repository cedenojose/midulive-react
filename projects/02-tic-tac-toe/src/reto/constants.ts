interface BoardSize {
  rows: number;
  columns: number;
}
export const BOARD_SIZE: BoardSize = {
  rows: 6,
  columns: 7,
};
interface Turns {
  playerOne: string;
  playerTwo: string;
}
export const TURNS: Turns = {
  playerOne: "🟠",
  playerTwo: "🟡",
};