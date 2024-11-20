import styles from "./button.module.css";
import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  style: "selected" | "unselected" | "calculate" | "info" | "calculateerr" | "disabled";
  onClick: any;
}

function Button({ children, style, onClick }: ButtonProps) {

  const btnClass = cn(styles.button, {
    [styles.selected]: style === "selected",
    [styles.unselected]: style === "unselected",
    [styles.calculate]: style === "calculate",
    [styles.calculateerr]: style === "calculateerr",
    [styles.info]: style === "info",
    [styles.disabled]: style === "disabled",
  });

  return (
    <button className={btnClass} onClick={onClick}>{ children }</button>
  )
}

export { Button }