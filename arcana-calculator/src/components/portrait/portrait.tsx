import { Portraitcart } from "../portraitcart/portraitcart";
import styles from "./portrait.module.css";
import cn from "classnames";

function Portrait({ day, month, year, visability }:any) {
  const formattedDay = day.padStart(2, "0");
  const formattedMonth = month.padStart(2, "0");
  const fullDate = `${formattedDay}.${formattedMonth}.${year}`;

  const containerClass = cn(styles.container, {[styles.hidden]: visability === "hidden",})

  return (
    <div className={containerClass}>
      <div className={styles.topcarts}>
        <Portraitcart className={styles.topCard1} top={"true"} pos={"13"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard2} top={"true"} pos={"9"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard3} top={"true"} pos={"11"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard4} top={"true"} pos={"10"} day={day} month={month} year={year}/>
        <Portraitcart className={styles.topCard5} top={"true"} pos={"14"} day={day} month={month} year={year}/>
      </div>
      <div className={styles.midcarts}>
        <div className={styles.title}>{fullDate}</div>
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
          <Portraitcart className={styles.botCard1} pos={"A"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard2} pos={"G1"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard3} pos={"B"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard4} pos={"C"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard5} pos={"G2"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard6} pos={"D"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard7} pos={"E"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard8} pos={"F"} day={day} month={month} year={year}/>
          <Portraitcart className={styles.botCard9} pos={"H"} day={day} month={month} year={year}/>
        </div>
      </div>
    </div>
  )
}

export { Portrait }