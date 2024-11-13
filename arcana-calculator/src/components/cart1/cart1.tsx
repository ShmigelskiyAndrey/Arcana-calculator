import Image from "next/image";
import styles from "./cart1.module.css";
import { Logo } from "../../shared/logo/logo";

function Cart1() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Система 22 паттерна</div>
      <div className={styles.maintext}>
        <div className={styles.text}>
          это эффективный и быстрый метод избавиться от разрушающих вашу жизнь механизмов и
          <div className={styles.bold}> путь к созданию нового себя и своей жизни.</div> 
        </div>
        <div className={styles.text}>
          Это <div className={styles.bold}>подробная инструкция к жизни человека, </div>
          через которую становятся понятны его травмы, его периоды жизни и выборы, его реакции и восприятие.
        </div>
      </div>
      <div className={styles.logo}>
        <Logo iconColor={"#E7E7E7"} circleColor={"#fff"} size={"84px"} iconSize={"60"}></Logo>
      </div>
    </div>
  )
}

export { Cart1 }