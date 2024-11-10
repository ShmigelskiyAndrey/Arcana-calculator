import styles from "./compositecell.module.css";

function Compositecell({ children }: any) {

  return (
    <div className={styles.container}>
      <div className={styles.date}>{children}</div>
      <div className={styles.fulldate}>01.01.2001</div>
      <div className={styles.calculation}>
        <div className={styles.calcvalue}>1</div>
        <div className={styles.calcvalue}>2</div>
        <div className={styles.calcvalue}>3</div>
        <div className={styles.calcvalue}>4</div>
        <div className={styles.calcvalue}>5</div>
        <div className={styles.calcvalue}>6</div>
      </div>
    </div>
  )
}

export { Compositecell }