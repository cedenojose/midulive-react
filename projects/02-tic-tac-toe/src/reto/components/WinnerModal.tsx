import { Winner } from "../interface";
import Square from "./Square";
import styles from "./WinnerModal.module.css";
import Button from "./ui/Button";
interface WinnerModal {
  winner: Winner;
  resetGame: () => void;
}
const WinnerModal = ({ winner, resetGame }: WinnerModal) => {
  if (!winner) {
    return null;
  }
  return (
    <section className={styles.modal}>
      <div className={styles.card}>
        <h2>Ganador</h2>
        <header>{winner && <Square isSelected>{winner}</Square>}</header>
        <footer>
          <Button onClick={resetGame}>Reset Game</Button>
        </footer>
      </div>
    </section>
  );
};
export default WinnerModal;
