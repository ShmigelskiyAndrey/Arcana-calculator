import { Compositecell } from "../compositecell/compositecell";
import styles from "./composite.module.css";

function Composite() {
  const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  let month = 10;
  let year = 2024;
  month--;
  const date = new Date(year, month);
  let firstDayThisMonth = date.getDay() - 1;
  let days = [];

  for (let i = 0; i < firstDayThisMonth; i++) {
    days.push('')
  };

  for (let i = 1; date.getMonth() === month; i++) {
    days.push(i);
    date.setDate(date.getDate() + 1)
  }

  let firstDayNextMonth = date.getDay() - 1;

  if (firstDayNextMonth !== 0) {
    for (let i = firstDayNextMonth; i < 7; i++) {
      days.push('');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <div className={styles.calender}>
        {weeks.map((week, index) => <div key={index} className={styles.daysfweekeek}>{week}</div>)}
        {days.map((day, index) => <Compositecell key={index}>{day}</Compositecell>)}
      </div>
      <div className={styles.summary}>
        <div className={styles.fulldate}>01 01 2001</div>
        <div className={styles.arcanas}></div>
      </div>
      <div className={styles.text}>Расчет всех дней на одном экране можно посмотреть в полноэкранной версии с компьютера</div>
    </div>
  )
}

export { Composite }