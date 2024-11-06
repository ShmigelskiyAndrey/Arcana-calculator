import styles from "./button.module.css";
import cn from "classnames";

function Button({ children, selected = false }: any) {
  const btnclass = cn(styles.button, {[styles.selected]: selected})
  return (
    <button className={btnclass}>{ children }</button>
  )
}

export { Button }