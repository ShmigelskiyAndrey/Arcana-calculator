import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  return (
    <header className={styles.container}>
      <img className={styles.imagemob} src="/header1.webp" alt="Picture of the author"></img>
      <img className={styles.imagemob2} src="/header2.webp" alt="Picture of the author"></img>
      <img className={styles.imagedesk} src="/header.webp" alt="Picture of the author"></img>
    </header>
  )
}

export { Banner }