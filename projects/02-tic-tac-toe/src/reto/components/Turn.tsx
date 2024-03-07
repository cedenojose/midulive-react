import Square from "./Square";
import styles from "./Turn.module.css";
import { TURNS } from "../constants";
interface Turn {
  turn: string;
}
const Turn = ({ turn }: Turn) => {
  return (
    <section className={styles.turn}>
      <h2>Turn</h2>
      <div className={styles.turnRow}>
        <Square isSelected={turn === TURNS.playerOne}>{TURNS.playerOne}</Square>
        <Square isSelected={turn === TURNS.playerTwo}>{TURNS.playerTwo}</Square>
      </div>
    </section>
  );
};
export default Turn;
