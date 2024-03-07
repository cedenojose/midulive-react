import styles from "./Button.module.css";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={styles.btn}
    >
      {children}
    </button>
  );
};
export default Button;
