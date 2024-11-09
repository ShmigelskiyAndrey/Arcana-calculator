import Image from "next/image";
import styles from "./footer.module.css";

function Footer() {

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.text}>ИП Черная Юлия Николаевна<br/>ИНН 890202382707<br/>ОГРНИП 320619600047262</div>
        <div className={styles.text}>Договоры оказания услуг в школе Со-Творчество Жизни</div>
      </div>
      <div className={styles.logo}>
        <Image         
        className={styles.image}
        src="/mainlogowhitetext.png"
        width={150}
        height={103}
        alt="Logo of the company"/>
      </div>
      <div className={styles.contacts}>
        <div className={styles.text}>г. Ростов-на-Дону</div>
        <div className={styles.text}>info@co-creationoflife.ru</div>
        <div className={styles.links}>
          <div className={styles.link}><Image src="/icons/whatsupicon.svg" width={54} height={54} alt="Whatsup Icon" /></div>
          <div className={styles.link}><Image src="/icons/telegramicon.svg" width={54} height={54} alt="Telegram Icon" /></div>
          <div className={styles.link}><Image src="/icons/insticon.svg" width={54} height={54} alt="Instagram Icon" /></div>
          <div className={styles.link}><Image src="/icons/mailicon.svg" width={54} height={54} alt="Mail Icon" /></div>
        </div>
      </div>
    </div>
  )
}

export { Footer }