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
  num = Math.abs(num);
  const romanNumerals: { [key: number]: string } = {
    0: "XXII", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
    6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X",
    11: "XI", 12: "XII", 13: "XIII", 14: "XIV", 15: "XV",
    16: "XVI", 17: "XVII", 18: "XVIII", 19: "XIX", 20: "XX",
    21: "XXI", 22: "XXII"
  };
  return romanNumerals[num] || "";
}

function Portraitcart({ className, top, pos, day = "1", month = "1", year = "2000" }:PortraitcartProps) {

  let value = 0;
  let addends: string[] = [];
  let calculation = "";

  const { sum: firstPos, addends: firstAddends } = calculatePos(day);
  const { sum: secondPos, addends: secondAddends } = calculatePos(month);
  const { sum: thirdPos, addends: thirdAddends } = sumAndAdjust(year);
  const ninthPosValue = (firstPos > secondPos) ? ((Math.abs(firstPos - secondPos)) === 0 ? 22 : (Math.abs(firstPos - secondPos))) : ((Math.abs(secondPos - firstPos)) === 0 ? 22 : (Math.abs(secondPos - firstPos)));
  const tenthPosValue = (secondPos > thirdPos) ? ((Math.abs(secondPos - thirdPos)) === 0 ? 22 : (Math.abs(secondPos - thirdPos))) : ((Math.abs(thirdPos - secondPos)) === 0 ? 22 : (Math.abs(thirdPos - secondPos)));
  const eleventhPosValue = ((ninthPosValue > tenthPosValue) ? (ninthPosValue - tenthPosValue) : (tenthPosValue - ninthPosValue));

  const positions = {
    "1": { value: firstPos },
    "2": { value: secondPos },
    "3": { value: thirdPos },
    "4": { value: firstPos + secondPos, addends: [toRoman(1), toRoman(2)] },
    "5": { value: secondPos + thirdPos, addends: [toRoman(2), toRoman(3)] },
    "6": { value: firstPos + secondPos + secondPos + thirdPos, addends: [toRoman(4), toRoman(5)] },
    "7": { value: thirdPos + firstPos + secondPos, addends: [toRoman(3), toRoman(4)] },
    "8": { value: secondPos + firstPos + secondPos + secondPos + thirdPos, addends: [toRoman(2), toRoman(6)] },
    "9": { value: ninthPosValue, calculation: `${toRoman(1)} - ${toRoman(2)}` },
    "10": { value: tenthPosValue, calculation: `${toRoman(2)} - ${toRoman(3)}` },
    "11": { value: eleventhPosValue, calculation: `${toRoman(9)} - ${toRoman(10)}` },
    "12": { value: thirdPos + firstPos + secondPos + secondPos + firstPos + secondPos + secondPos + thirdPos, addends: [toRoman(7), toRoman(8)] },
    "13": { value: firstPos + firstPos + secondPos + firstPos + secondPos + secondPos + thirdPos, addends: [toRoman(1), toRoman(4), toRoman(6)] },
    "14": { value: thirdPos + secondPos + thirdPos + firstPos + secondPos + secondPos + thirdPos, addends: [toRoman(3), toRoman(5), toRoman(6)] },
    "A": { value: firstPos + firstPos + secondPos, addends: [toRoman(1), toRoman(4)] },
    "B": { value: secondPos + firstPos + secondPos, addends: [toRoman(2), toRoman(4)] },
    "C": { value: secondPos + secondPos + thirdPos, addends: [toRoman(2), toRoman(5)] },
    "D": { value: thirdPos + secondPos + thirdPos, addends: [toRoman(3), toRoman(5)] },
    "E": { value: firstPos + secondPos + firstPos + secondPos + secondPos + thirdPos, addends: [toRoman(4), toRoman(6)] },
    "F": { value: secondPos + thirdPos + firstPos + secondPos + secondPos + thirdPos, addends: [toRoman(5), toRoman(6)] },
    "G1": { value: thirdPos + secondPos + thirdPos + secondPos + secondPos + thirdPos, addends: ["D", "C"] },
    "G2": { value: secondPos + firstPos + secondPos + secondPos + thirdPos + firstPos + secondPos + secondPos + thirdPos, addends: ["B", "F"] },
    "H": { value: firstPos + firstPos + secondPos + firstPos + secondPos + firstPos + secondPos + secondPos + thirdPos, addends: ["A", "E"] },
  };

  if (pos && pos in positions) {
    const position = positions[pos as keyof typeof positions];
    value = position.value;
    if ("addends" in position) {
      addends = position.addends;
    } else if ("calculation" in position) {
      calculation = position.calculation;
    }
  }

  value = ((value - 1) % 22) + 1;

  function sumAndAdjust(input: string): { sum: number; addends: number[] } {
    const addends = input.split('').map(char => parseInt(char, 10));
    let sum = addends.reduce((acc, num) => acc + num, 0);

    if (sum > 22) {
      sum = sum - 22
    }

    return { sum, addends }
  }

  function calculatePos(input: string): { sum: number; addends: number[] } {
    let sum
    let finalInput = [+input]

    if ( +input > 22 ) {
      sum = (+input - 22)
      finalInput = [sum]
    } else {
      sum = +input;
    }
    const addends = finalInput;

    return { sum, addends }
  }
  

  const containerClass = cn(styles.container, className, {
    [styles.topCard]: top === "true",
  })

  return (
    <div className={containerClass}>
      <div className={styles.position}>{pos}</div>
      <div className={styles.value}>{toRoman(value)}</div>
      {calculation ? <div className={styles.calculation}>{calculation}</div> : <div className={styles.calculation}>{addends.join("+")}</div>}
    </div>
  )
}

export { Portraitcart }