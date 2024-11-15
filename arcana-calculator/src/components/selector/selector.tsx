'use client'

import { Button } from "../../shared/button/button";
import { useState } from "react";
import styles from "./selector.module.css";
import { Input } from "../../shared/input/input";
import { Composite } from "../composite/composite";
import { Portrait } from "../portrait/portrait";

type ButtonType = "personality" | "composite";

function Selector() {
  const [selectedButton, setSelectedButton] = useState<ButtonType>("personality");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [compositeMonth, setCompositeMonth] = useState("");
  const [compositeYear, setCompositeYear] = useState("2024");

  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const handleButtonClick = (buttonType: ButtonType) => {
    setSelectedButton(buttonType);
  };

  const calculate = () => {
    console.log('вычесляем')
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Рассчитать психологический портрет</div>
      <div className={styles.buttons}>
        <Button style={selectedButton === "personality" ? "selected" : "unselected"} onClick={() => handleButtonClick("personality")}>Личностный портрет</Button>
        <Button style={selectedButton === "composite" ? "selected" : "unselected"} onClick={() => handleButtonClick("composite")}>Композит дня\месяца</Button>
      </div>
      <div className={styles.form}>
        <div className={styles.subtitle}>Дата рождения:</div>
        <div className={styles.maininputs}>
          <Input type="number"
            placeholder="Число"
            value={day}
            onChange={(e) => setDay(e.target.value)}>
          </Input>
          <Input type="number"
            placeholder="Месяц"
            value={month}
            onChange={(e) => setMonth(e.target.value)}>
          </Input>
          <Input type="number"
            placeholder="Год"
            value={year}
            onChange={(e) => setYear(e.target.value)}>
          </Input>
        </div>
        <div className={styles.subtitle}>Месяц:</div>
        <div className={styles.additionalinputs}>
          <Input
            type="number"
            placeholder="Месяц"
            value={compositeMonth}
            onChange={(e) => setCompositeMonth(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Год"
            value={compositeYear}
            onChange={(e) => setCompositeYear(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.calculatebutton}>
        <Button style={"calculate"} onClick={() => calculate()}>Рассчитать</Button>
      </div>
      <Composite day={day} month={month} year={year} compositeMonth={compositeMonth} compositeYear={compositeYear}></Composite>
      <Portrait day={day} month={month} year={year}></Portrait>
    </div>
  )
}

export { Selector }