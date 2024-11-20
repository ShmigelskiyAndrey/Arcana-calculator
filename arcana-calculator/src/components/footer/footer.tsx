import Image from "next/image";
import styles from "./footer.module.css";

function Footer() {

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.text}>ИП Черная Юлия Николаевна<br/>ИНН 890202382707<br/>ОГРНИП 320619600047262</div>
          <div className={styles.text}><a href="https://co-creationoflife.ru/cms/system/legal" target="blank" rel="nofollow">Договоры оказания услуг в школе Со-Творчество Жизни</a></div>
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
          <div className={styles.text}><a href="mailto:info@co-creationoflife.ru" target="blank" rel="nofollow">info@co-creationoflife.ru</a></div>
          <div className={styles.links}>
            <div className={styles.link}><a href="https://wa.me/+79313780087" target="blank" rel="nofollow"><Image src="/icons/whatsupicon.svg" width={54} height={54} alt="Whatsup Icon" /></a></div>
            <div className={styles.link}><a href="https://t.me/AnastasiyaMatveenko" target="blank" rel="nofollow"><Image src="/icons/telegramicon.svg" width={54} height={54} alt="Telegram Icon" /></a></div>
            <div className={styles.link}><a href="https://www.instagram.com/lia.cher" target="blank" rel="nofollow"><Image src="/icons/insticon.svg" width={54} height={54} alt="Instagram Icon" /></a></div>
            <div className={styles.link}><a href="https://co-creationoflife.ru/cms/system/contact" target="blank" rel="nofollow"><Image src="/icons/mailicon.svg" width={54} height={54} alt="Mail Icon" /></a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }