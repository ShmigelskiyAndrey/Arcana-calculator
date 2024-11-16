import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  return (
    <header className={styles.container}>
      <Image
        className={styles.imagemob}
        src="/header.webp"
        width={800}
        height={1400}
        quality={100}
        alt="Picture of the author"
      />
      <Image
        className={styles.imagemob2}
        src="/headermob2.webp"
        width={800}
        height={1400}
        quality={100}
        alt="Picture of the author"
      />
      <Image
        className={styles.imagedesk}
        src="/headerwide.webp"
        width={1920}
        height={600}
        quality={100}
        alt="Picture of the author"
      />
    </header>
  )
}

export { Banner }