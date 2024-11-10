import styles from "./portraitcart.module.css";

function Portraitcart() {

  return (
    <div className={styles.container}>
      <div className={styles.position}>2</div>
      <div className={styles.value}>II</div>
      <div className={styles.calculation}>I+I</div>
    </div>
  )
}

export { Portraitcart }