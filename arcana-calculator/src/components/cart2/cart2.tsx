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
        <div className={styles.text}><a href="https://co-creationoflife.info/ark" target="blank" rel="nofollow">Основы работы с психологическим портретом</a></div>

        <div className={styles.step}>
          <div className={styles.subtitle}>II ступень</div>
          <Arrow color={"gradient"}></Arrow>
        </div>
        <div className={styles.text}><a href="https://co-creationoflife.info/ark2" target="blank" rel="nofollow">Проработка связок паттернов</a></div>

        <div className={styles.step}>
          <div className={styles.subtitle}>III ступень</div>
          <Arrow color={"gradient"}></Arrow>
        </div>
        <div className={styles.text}><a href="https://co-creationoflife.info/ark3" target="blank" rel="nofollow">Арканы PRO</a></div>
      </div> 
    </div>
  )
}

export { Cart2 }