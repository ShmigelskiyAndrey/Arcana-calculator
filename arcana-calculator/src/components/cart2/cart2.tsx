import styles from "./cart2.module.css";
import { Arrow } from "../../shared/arrow/arrow";
import { Logo } from "../../shared/logo/logo";

function Cart2() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo iconColor={"#242329"} size={"52px"} iconSize={"40"}></Logo>
      </div>
      <div className={styles.title}>Курс состоит из трех блоков, каждый из которых служит новой ступенью
        <div className={styles.bold}> к пониманию природы человека и его действий.</div>
      </div>
      <div className={styles.maintext}>
        <div className={styles.step}>
          <div className={styles.subtitle}>I ступень</div>
            <Arrow color={"gradient"}></Arrow>
        </div>
        <div className={styles.text}>Основы работы с психологическим портретом</div>

        <div className={styles.step}>
          <div className={styles.subtitle}>II ступень</div>
          <Arrow color={"gradient"}></Arrow>
        </div>
        <div className={styles.text}>Проработка связок паттернов</div>

        <div className={styles.step}>
          <div className={styles.subtitle}>III ступень</div>
          <Arrow color={"gradient"}></Arrow>
        </div>
        <div className={styles.text}>Арканы PRO</div>
      </div> 
    </div>
  )
}

export { Cart2 }