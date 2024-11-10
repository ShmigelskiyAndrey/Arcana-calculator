import { Portraitcart } from "../portraitcart/portraitcart";
import styles from "./portrait.module.css";

function Portrait() {

  return (
    <div className={styles.container}>
      <div className={styles.topcarts}>
        <Portraitcart/>
      </div>
      <div className={styles.midcarts}>
        <div className={styles.title}></div>
        <div className={styles.carts}></div>
      </div>
      <div className={styles.botcarts}>
        <div className={styles.title}></div>
        <div className={styles.carts}></div>
      </div>
    </div>
  )
}

export { Portrait }