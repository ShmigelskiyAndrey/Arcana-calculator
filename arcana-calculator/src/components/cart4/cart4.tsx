import styles from "./cart4.module.css";
import Image from "next/image";

function Cart4() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>После прохождения трёх ступеней можно получить 
        <div className={styles.bold}> Диплом государственного образца о профессиональной переподготовке, </div>
        предоставляющий право на организацию и проведение психологического консультирования.
      </div>
      <div className={styles.imageContainer}>
        <Image         
        className={styles.image}
        src="/diplom.webp"
        width={241}
        height={223}
        alt="Diploma"/>
      </div>
    </div>
  )
}

export { Cart4 }