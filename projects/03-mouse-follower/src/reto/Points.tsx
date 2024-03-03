type Points = {
  children: React.ReactNode;
};
const Points = ({ children }: Points) => {
  return (
    <p
      style={{
        cursor: "none",
      }}
    >
      {children}
    </p>
  );
};
export default Points;
