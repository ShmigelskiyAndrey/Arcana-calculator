import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  return (
    <header className={styles.container}>
      <img className={styles.imagemob} src="/header1.webp" alt="Picture of the author"></img>
      <img className={styles.imagemob2} src="/header2.webp" alt="Picture of the author"></img>
      <img className={styles.imagedesk} src="/header.webp" alt="Picture of the author"></img>
      {/* <Image
        className={styles.imagemob}
        src="/header1.webp"
        width={800}
        height={1400}
        quality={100}
        alt="Picture of the author"
      />
      <Image
        className={styles.imagemob2}
        src="/header2.webp"
        width={800}
        height={1400}
        quality={100}
        alt="Picture of the author"
      />
      <Image
        className={styles.imagedesk}
        src="/header.webp"
        width={1920}
        height={600}
        quality={100}
        alt="Picture of the author"
      /> */}
    </header>
  )
}

export { Banner }