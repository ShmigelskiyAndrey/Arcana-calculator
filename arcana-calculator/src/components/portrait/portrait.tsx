import { Portraitcart } from "../portraitcart/portraitcart";
import styles from "./portrait.module.css";

function Portrait({ day, month, year }:any) {

  return (
    <div className={styles.container}>
      <div className={styles.topcarts}>
        <Portraitcart className={styles.topCard1} top={"true"} pos={"13"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard2} top={"true"} pos={"9"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard3} top={"true"} pos={"11"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard4} top={"true"} pos={"10"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard5} top={"true"} pos={"14"} day={day} month={month} year={year}/>
      </div>
      <div className={styles.midcarts}>
        <div className={styles.title}>01.01.2001</div>
        <div className={styles.carts}>
          <Portraitcart className={styles.midCard1} pos={"12"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard2} pos={"1"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard3} pos={"2"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard4} pos={"3"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard5} pos={"7"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard6} pos={"4"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard7} pos={"5"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard8} pos={"6"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.midCard9} pos={"8"} day={day} month={month} year={year}/>
        </div>
      </div>
      <div className={styles.botcarts}>
        <div className={styles.title}>подсознание</div>
        <div className={styles.carts}>
          <Portraitcart className={styles.botCard1} pos={"a"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard2} pos={"g1"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard3} pos={"b"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard4} pos={"c"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard5} pos={"g2"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard6} pos={"d"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard7} pos={"e"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard8} pos={"f"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard9} pos={"h"} day={day} month={month} year={year}/>
        </div>
      </div>
    </div>
  )
}

export { Portrait }