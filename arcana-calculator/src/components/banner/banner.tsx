import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  return (
    <header className={styles.container}>
      <Image
        className={styles.image}
        src="/header.webp"
        width={800}
        height={1400}
        quality={100}
        alt="Picture of the author"
      />
    </header>
  )
}

export { Banner }