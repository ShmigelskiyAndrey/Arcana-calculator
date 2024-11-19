import { useEffect, useState } from "react";
import { Compositecell } from "../compositecell/compositecell";
import styles from "./composite.module.css";
import cn from "classnames";

function Composite({ day, month, year, compositeMonth, compositeYear, visability, onResetSelectedCell }:any) {
  const [selectedArcana, setSelectedArcana] = useState<string[]>([]);
  const weeks = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const [fullDate, setFullDate] = useState<string>();
  const [selectedCellIndex, setSelectedCellIndex] = useState<number | null>(null);
  const [days, setDays] = useState<string[]>([]);
  const [firstCellData, setFirstCellData] = useState<{ arcana: string[], fullDate: string} | null>(null);
  const [firstElemIndex, setFirstElemIndex] = useState<number | null>(null);

  const handleCellClick = (arcana: string[], fullDate: string, index: number) => {
    setSelectedArcana(arcana); 
    setFullDate(fullDate);
    setSelectedCellIndex(index);
  };

  useEffect(() => {
    if (onResetSelectedCell) {
      setSelectedArcana(firstCellData?.arcana || []);
      setFullDate(firstCellData?.fullDate);
      setSelectedCellIndex(firstElemIndex);
    }
  }, [onResetSelectedCell]);

  const setFirstCell = (arcana: string[], fullDate: string) => {
    setFirstCellData({ arcana, fullDate });
  };

  useEffect(() => {
    const localCompositeMonth = compositeMonth - 1;
    const date = new Date(compositeYear, localCompositeMonth);
    const localDays: string[] = [];
    const firstDayThisMonth = (date.getDay() + 6) % 7;

    for (let i = 0; i < firstDayThisMonth; i++) {
      localDays.push('');
    }

    for (let i = 1; date.getMonth() === localCompositeMonth; i++) {
      localDays.push(i.toString());
      date.setDate(date.getDate() + 1);
    }

    const firstDayNextMonth = (date.getDay() + 6) % 7;
    if (firstDayNextMonth !== 0) {
      for (let i = firstDayNextMonth; i < 7; i++) {
        localDays.push('');
      }
    }

    setFirstElemIndex(localDays.findIndex((d) => d !== ""));
    setDays(localDays);
  }, [compositeYear, compositeMonth]);

  const containerClass = cn(styles.container, {[styles.hidden]: visability === "hidden",})

  return (
    <div className={containerClass}>
      <div className={styles.title}></div>
      <div className={styles.calender}>
        {weeks.map((week, index) => <div key={index} className={styles.daysfweekeek}>{week}</div>)}
        {days.map((date, index) => 
          <Compositecell 
          key={index} 
          day={day} 
          month={month} 
          year={year} 
          compositeMonth={compositeMonth} 
          compositeYear={compositeYear} 
          date={date} 
          onCellClick={(arcana, fullDate) => handleCellClick(arcana, fullDate, index)} 
          isSelected={selectedCellIndex === index}
          setFirstCell={index === firstElemIndex ? setFirstCell : undefined}>
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