import styles from "./compositecell.module.css";

function Compositecell({ children }: any) {

  return (
    <div className={styles.container}>
      <div className={styles.date}>{children}</div>
    </div>
  )
}

export { Compositecell }