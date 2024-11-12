import styles from "./portraitcart.module.css";
import cn from "classnames";

function Portraitcart({ className, top }:any) {

  const containerClass = cn(styles.container, className, {
    [styles.topCard]: top === "true",
  })

  return (
    <div className={containerClass}>
      <div className={styles.position}>2</div>
      <div className={styles.value}>II</div>
      <div className={styles.calculation}>I+I</div>
    </div>
  )
}

export { Portraitcart }