import { Board } from "../interface";
import styles from "./ConectFourdBoard.module.css";
import Square from "./Square";
import Button from "./ui/Button";
interface BoardProps {
  board: Board[][];
  updateBoard: (columnId: number) => void;
  resetGame: () => void;
}
const Board = ({ board, updateBoard, resetGame }: BoardProps) => {
  return (
    <div className={styles.board}>
      <h2>
        Conect Four Board <Button onClick={resetGame}>Reset Game</Button>
      </h2>

      {board.map((rows, rowId) => (
        <div
          className={styles.rows}
          key={rowId}
        >
          {rows.map((square, columnsId) => (
            <Square
              key={`${rowId}-${columnsId}`}
              columnId={columnsId}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Board;
