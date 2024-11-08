import styles from "./cart3.module.css";
import { Logo } from "../logo/logo";
import Image from "next/image";

function Cart3() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image         
        className={styles.image}
        src="/cartportrait.webp"
        width={370}
        height={488}
        alt="Portrait of the author"/>
      </div>
      <div className={styles.logo}>
        <Logo iconColor={"#242329"} size={"33px"} iconSize={"23"} circleColor={"gradient"}></Logo>
      </div>
      <div className={styles.text}>
      Освоив материал этих блоков вы научитесь
        <div className={styles.bold}> видеть слепые зоны и точки роста, усиливать себя на каждом этапе жизни, стать реализованной и понимать абсолютно все происходящее вокруг.
        </div>
      </div>
    </div>
  )
}

export { Cart3 }