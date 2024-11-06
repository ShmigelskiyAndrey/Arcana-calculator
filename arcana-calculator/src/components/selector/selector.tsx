import { Button } from "../button/button";
import styles from "./selector.module.css";

function Selector() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Рассчитать психологический портрет</div>
      <div className={styles.buttons}>
        <Button selected={true}>Личностный портрет</Button>
        <Button selected={false}>Композит дня\месяца</Button>
      </div>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Дата рождения:</legend>
          <input type="number" className={styles.date}></input>
          <input type="number" className={styles.month}></input>
          <input type="number" className={styles.year}></input>
        </fieldset>
      </form>
    </div>
  )
}

export { Selector }