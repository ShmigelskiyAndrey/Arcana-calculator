import styles from "./portraitcart.module.css";
import cn from "classnames";

type PortraitcartProps = {
  className?: string;
  top?: string;
  pos?: string;
  day?: string;
  month?: string;
  year?: string;
};

function toRoman(num: number): string {
  const romanNumerals: { [key: number]: string } = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
    6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X",
    11: "XI", 12: "XII", 13: "XIII", 14: "XIV", 15: "XV",
    16: "XVI", 17: "XVII", 18: "XVIII", 19: "XIX", 20: "XX",
    21: "XXI", 22: "XXII"
  };
  return romanNumerals[num] || "";
}

function Portraitcart({ className, top, pos, day, month, year }:PortraitcartProps) {

  let value = 0;
  let addends: string[] = [];
  day = "25";
  month = "11"
  year = "1998"

  const { sum: firstPos, addends: firstAddends } = sumAndAdjust(day);
  const { sum: secondPos, addends: secondAddends } = sumAndAdjust(month);
  const { sum: thirdPos, addends: thirdAddends } = sumAndAdjust(year);

  switch (pos) {
    case "1":
      value = firstPos;
      addends = firstAddends.map(toRoman);
      break;
    case "2":
      value = secondPos;
      addends = secondAddends.map(toRoman);
      break;
    case "3":
      value = thirdPos;
      addends = thirdAddends.map(toRoman);
      break;
    case "4":
      value = firstPos + secondPos;
      addends = [toRoman(1), toRoman(2)];
      break;
    case "5":
      value = secondPos + thirdPos;
      addends = [toRoman(2), toRoman(3)];
      break;
    case "6":
      value = firstPos + secondPos + secondPos + thirdPos;
      addends = [toRoman(4), toRoman(5)];
      break;
    case "7":
      value = firstPos + secondPos + thirdPos;
      addends = [toRoman(3), toRoman(4)];
      break;
    case "8":
      value = secondPos + firstPos + secondPos + secondPos + thirdPos;
      addends = [toRoman(2), toRoman(6)];
      break;
    case "9":
      value = firstPos - secondPos;
      addends = [toRoman(1), toRoman(2)];
      break;
    
    default: 
      value = 0;
  }

  while (value > 22) {
    value -= 22;
  }

  function sumAndAdjust(input: string): { sum: number; addends: number[] } {
    const addends = input.split('').map(char => parseInt(char, 10));
    let sum = addends.reduce((acc, num) => acc + num, 0);

    return { sum, addends }
  }
  

  const containerClass = cn(styles.container, className, {
    [styles.topCard]: top === "true",
  })

  return (
    <div className={containerClass}>
      <div className={styles.position}>{pos}</div>
      <div className={styles.value}>{toRoman(value)}</div>
      <div className={styles.calculation}>{addends.join("+")}</div>
    </div>
  )
}

export { Portraitcart }