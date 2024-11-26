import styles from "./button.module.css";
import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  style: "selected" | "unselected" | "calculate" | "info" | "calculateerr" | "disabled" | "additionalCalculate";
  onClick: any;
  visability?: string;
}

function Button({ children, style, onClick, visability }: ButtonProps) {

  const btnClass = cn(styles.button, {
    [styles.selected]: style === "selected",
    [styles.unselected]: style === "unselected",
    [styles.calculate]: style === "calculate",
    [styles.calculateerr]: style === "calculateerr",
    [styles.info]: style === "info",
    [styles.disabled]: style === "disabled",
    [styles.hidden]: visability === "hidden",
    [styles.additionalCalculate]: style === "additionalCalculate",
  });

  return (
    <button className={btnClass} onClick={onClick}>{ children }</button>
  )
}

export { Button }