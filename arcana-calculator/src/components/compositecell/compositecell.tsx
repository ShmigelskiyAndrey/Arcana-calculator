import { useEffect } from "react";
import styles from "./compositecell.module.css";
import cn from "classnames";

interface CompositecellProps {
  date: string;
  compositeMonth: string;
  compositeYear: number;
  day: string;
  month: string;
  year: string;
  onCellClick?: (arcana: string[], date: string) => void;
  isSelected: boolean;
  setFirstCell?: (arcana: string[], fullDate: string) => void;
}

function toRoman(num: number): string {
  num = Math.abs(num);
  const romanNumerals: { [key: number]: string } = {
    0: "0", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
    6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X",
    11: "XI", 12: "XII", 13: "XIII", 14: "XIV", 15: "XV",
    16: "XVI", 17: "XVII", 18: "XVIII", 19: "XIX", 20: "XX",
    21: "XXI", 22: "XXII"
  };
  return romanNumerals[num] || "";
}

function Compositecell({ day, month, year, compositeMonth, compositeYear, date, onCellClick, isSelected, setFirstCell }: CompositecellProps) {
  const formattedDay = date.padStart(2, "0");
  const formattedMonth = compositeMonth.toString().padStart(2, "0");
  const fullDate = `${formattedDay}.${formattedMonth}.${compositeYear}`;

  const numericDay = parseInt(day, 10);
  const numericDate = parseInt(date, 10);
  const numericMonth = parseInt(month, 10);
  const numericCompositeMonth = parseInt(compositeMonth, 10);
  const yearSum = year.split('').map(char => parseInt(char, 10)).reduce((acc, num) => acc + num, 0);
  const compositeYearSum = compositeYear.toString().split('').map(char => parseInt(char, 10)).reduce((acc, num) => acc + num, 0);

  let firstPosValue = ((numericDay + numericDate - 1) % 22) + 1;
  let secondPosValue = ((numericMonth + numericCompositeMonth - 1) % 22) + 1;
  let thirdPosValue = ((yearSum + compositeYearSum - 1) % 22) + 1;
  let fourthPosValue = ((firstPosValue + secondPosValue - 1) % 22) + 1;
  let fifthPosValue = ((secondPosValue + thirdPosValue - 1) % 22) + 1;
  let sixthPosValue = ((fourthPosValue + fifthPosValue - 1) % 22) + 1;

  const handleClick = () => {
    if (onCellClick) {
      onCellClick([
        toRoman(firstPosValue),
        toRoman(secondPosValue),
        toRoman(thirdPosValue),
        toRoman(fourthPosValue),
        toRoman(fifthPosValue),
        toRoman(sixthPosValue),
      ], fullDate);
    }
  };

  useEffect(() => {
    if (setFirstCell && date === "1") {
      setFirstCell([
        firstPosValue.toString(), 
        secondPosValue.toString(), 
        thirdPosValue.toString(), 
        fourthPosValue.toString(), 
        fifthPosValue.toString(), 
        sixthPosValue.toString()
      ], fullDate);
    }
  }, [fullDate]);

  if (!date) {return <div className={styles.container}></div>}

  const containerClass = cn(styles.container, {
    [styles.selected]: isSelected === true})

  return (
    <div className={containerClass} onClick={handleClick}>
      <div className={styles.date}>{date}</div>
      <div className={styles.fulldate}>{fullDate}</div>
      <div className={styles.calculation}>
        <div className={styles.calcvalue}>{toRoman(firstPosValue)}</div>
        <div className={styles.calcvalue}>{toRoman(secondPosValue)}</div>
        <div className={styles.calcvalue}>{toRoman(thirdPosValue)}</div>
        <div className={styles.calcvalue}>{toRoman(fourthPosValue)}</div>
        <div className={styles.calcvalue}>{toRoman(fifthPosValue)}</div>
        <div className={styles.calcvalue}>{toRoman(sixthPosValue)}</div>
      </div>
    </div>
  )
}

export { Compositecell }