import { useEffect, useState } from "react";
import { Compositecell } from "../compositecell/compositecell";
import styles from "./composite.module.css";
import cn from "classnames";

function Composite({ day, month, year, compositeMonth, compositeYear, visability, onResetSelectedCell }:any) {
  const [selectedArcana, setSelectedArcana] = useState<string[]>([]);
  const [fullDate, setFullDate] = useState<string>();
  const [selectedCellIndex, setSelectedCellIndex] = useState<number | null>(null);

  const handleCellClick = (arcana: string[], fullDate: string, index: number) => {
    setSelectedArcana(arcana); 
    setFullDate(fullDate);
    setSelectedCellIndex(index);
  };

  useEffect(() => {
    if (onResetSelectedCell) {
      setSelectedArcana([]);
      setFullDate(undefined);
      setSelectedCellIndex(null);
    }
  }, [onResetSelectedCell]);

  const containerClass = cn(styles.container, {[styles.hidden]: visability === "hidden",})

  const weeks = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  compositeMonth--;
  const date = new Date(compositeYear, compositeMonth);
  let firstDayThisMonth = (date.getDay() + 6) % 7;
  let days = [];

  for (let i = 0; i < firstDayThisMonth; i++) {
    days.push('')
  };

  for (let i = 1; date.getMonth() === compositeMonth; i++) {
    days.push(i.toString());
    date.setDate(date.getDate() + 1)
  }

  let firstDayNextMonth = (date.getDay() + 6) % 7;

  if (firstDayNextMonth !== 0) {
    for (let i = firstDayNextMonth; i < 7; i++) {
      days.push('');
    }
  }
  compositeMonth++;

  return (
    <div className={containerClass}>
      <div className={styles.title}></div>
      <div className={styles.calender}>
        {weeks.map((week, index) => <div key={index} className={styles.daysfweekeek}>{week}</div>)}
        {days.map((date, index) => <Compositecell key={index} day={day} month={month} year={year} 
            compositeMonth={compositeMonth} compositeYear={compositeYear} date={date} 
            onCellClick={(arcana, fullDate) => handleCellClick(arcana, fullDate, index)} isSelected={selectedCellIndex === index}>
          </Compositecell>)}
      </div>
      <div className={styles.summary}>
        <div className={styles.fulldate}>{fullDate}</div>
        <div className={styles.arcanas}>
          {selectedArcana
            ? selectedArcana.map((arcana, idx) => <div key={idx}>{arcana}</div>)
            : ""}
        </div>
      </div>
      <div className={styles.text}>Расчет всех дней на одном экране можно посмотреть в полноэкранной версии с компьютера</div>
    </div>
  )
}

export { Composite }