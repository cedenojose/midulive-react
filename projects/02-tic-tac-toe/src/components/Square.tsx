interface Square {
  children: React.ReactNode;
  isSelected?: boolean;
  updateBoard?: (index: number) => void;
  index?: number;
}

const Square = ({ children, isSelected, updateBoard, index }: Square) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = (): void => {
    if (typeof updateBoard === "function" && typeof index === "number") {
      updateBoard(index);
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
