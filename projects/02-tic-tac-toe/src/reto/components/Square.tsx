import styles from "./Square.module.css";
interface Square {
  children: React.ReactNode;
  isSelected?: boolean;
  columnId?: number;
  updateBoard?: (columId: number) => void;
}
const Square = ({ children, isSelected, columnId, updateBoard }: Square) => {
  const className = `${
    isSelected ? styles.square + " " + styles.isSelected : styles.square
  }`;
  const handleClick = () => {
    if (typeof updateBoard === "function" && typeof columnId === "number") {
      updateBoard(columnId);
    }
  };
  return (
    <div
      className={className}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
export default Square;
