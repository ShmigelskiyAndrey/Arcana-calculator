import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/header.webp"
        width={390}
        height={698}
        quality={100}
        alt="Picture of the author"
      />
      <Image
        className={styles.logo}
        src="/logo.webp"
        width={222}
        height={152}
        quality={100}
        alt="Logo of the project"
      />
    </div>
  )
}

export { Banner }