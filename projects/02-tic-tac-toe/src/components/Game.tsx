import { Board } from "../interface";
import Square from "./Square";

interface Game {
  board: Board[];
  updateBoard: (index: number) => void;
}

const Game = ({ board, updateBoard }: Game) => {
  return (
    <section className="game">
      {board.map((square: Board, index: number) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {square}
          </Square>
        );
      })}
    </section>
  );
};
export default Game;
