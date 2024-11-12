import { Portraitcart } from "../portraitcart/portraitcart";
import styles from "./portrait.module.css";

function Portrait() {

  return (
    <div className={styles.container}>
      <div className={styles.topcarts}>
        <Portraitcart className={styles.topCard1} top={"true"}/>
        <Portraitcart className={styles.topCard2} top={"true"}/>
        <Portraitcart className={styles.topCard3} top={"true"}/>
        <Portraitcart className={styles.topCard4} top={"true"}/>
        <Portraitcart className={styles.topCard5} top={"true"}/>
      </div>
      <div className={styles.midcarts}>
        <div className={styles.title}>01.01.2001</div>
        <div className={styles.carts}>
          <Portraitcart className={styles.midCard1}/>
          <Portraitcart className={styles.midCard2}/>
          <Portraitcart className={styles.midCard3}/>
          <Portraitcart className={styles.midCard4}/>
          <Portraitcart className={styles.midCard5}/>
          <Portraitcart className={styles.midCard6}/>
          <Portraitcart className={styles.midCard7}/>
          <Portraitcart className={styles.midCard8}/>
          <Portraitcart className={styles.midCard9}/>
        </div>
      </div>
      <div className={styles.botcarts}>
        <div className={styles.title}>подсознание</div>
        <div className={styles.carts}>
          <Portraitcart className={styles.botCard1}/>
          <Portraitcart className={styles.botCard2}/>
          <Portraitcart className={styles.botCard3}/>
          <Portraitcart className={styles.botCard4}/>
          <Portraitcart className={styles.botCard5}/>
          <Portraitcart className={styles.botCard6}/>
          <Portraitcart className={styles.botCard7}/>
          <Portraitcart className={styles.botCard8}/>
          <Portraitcart className={styles.botCard9}/>
        </div>
      </div>
    </div>
  )
}

export { Portrait }