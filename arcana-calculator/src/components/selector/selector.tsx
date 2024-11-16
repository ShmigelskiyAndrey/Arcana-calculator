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
  const [compositeVisible, setCompositeVisible] = useState("notVisible");
  const [portraitVisible, setPortraitVisible] = useState("notVisible");
  const [titleValue, setTitleValue] = useState("Рассчитать психологический портрет");

  const handleButtonClick = (buttonType: ButtonType) => {
    setCompositeVisible("notVisible");
    setPortraitVisible("notVisible");
    if (buttonType === "personality") {
      setTitleValue("Рассчитать психологический портрет")
    }
    if (buttonType === "composite") {
      setTitleValue("Рассчитать композит дня\\месяца")
    }
    setSelectedButton(buttonType);
  };

  const calculate = () => {
    if (!inputsValidationCheck()) {
      return;
    }

    if (selectedButton === "personality") {
      setTitleValue("психологический портрет")
    }
    if (selectedButton === "composite") {
      setTitleValue("композит дня\\месяца")
    }
    if (selectedButton === "personality") {
      setPortraitVisible("visible")
    }
    if (selectedButton === "composite") {
      setCompositeVisible("visible")
    }
  }

  const inputsValidationCheck = () => {
    if (!day || !month || !year) return false;
    if (selectedButton === "composite" && (!compositeMonth || !compositeYear)) return false;
    return true;
  };

  const validateYear = (value: string) => {
    setCompositeVisible("notVisible")
    setPortraitVisible("notVisible")
    const sanitized = value.replace(/\D/g, "");
    return sanitized.slice(0, 4);
  };

  const validateMonth = (value: string) => {
    setCompositeVisible("notVisible")
    setPortraitVisible("notVisible")
    const sanitized = value.replace(/\D/g, "");
    let numericValue = parseInt(sanitized, 10);
    if (isNaN(numericValue)) return "";
    if (numericValue < 1) {numericValue = 1}
    return Math.min(Math.max(numericValue, 1), 12).toString();
  };

  const validateDay = (value: string, month: string, year: string) => {
    setCompositeVisible("notVisible")
    setPortraitVisible("notVisible")
    const sanitized = value.replace(/\D/g, "");
    const numericValue = parseInt(sanitized, 10);
  
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);
    const maxDays = monthNumber && yearNumber
      ? new Date(yearNumber, monthNumber, 0).getDate()
      : 31;
  
    if (isNaN(numericValue)) return "";
    return Math.min(Math.max(numericValue, 1), maxDays).toString();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{titleValue}</div>
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
            onChange={(e) => setDay(validateDay(e.target.value, month, year))}>
          </Input>
          <Input type="number"
            placeholder="Месяц"
            value={month}
            onChange={(e) => setMonth(validateMonth(e.target.value))}
            >
          </Input>
          <Input type="number"
            placeholder="Год"
            value={year}
            onChange={(e) => setYear(validateYear(e.target.value))}>
          </Input>
        </div>
        {selectedButton === "composite" ? 
        <>
          <div className={styles.subtitle}>Месяц:</div>
          <div className={styles.additionalinputs}>
            <Input
              type="number"
              placeholder="Месяц"
              value={compositeMonth}
              onChange={(e) => setCompositeMonth(validateMonth(e.target.value))}
            />
            <Input
              type="number"
              placeholder="Год"
              value={compositeYear}
              onChange={(e) => setCompositeYear(validateYear(e.target.value))}
            />
          </div>
        </>
        : ""}
        
      </div>
      <div className={styles.calculatebutton}>
        <Button style={inputsValidationCheck() ? "calculate" : "disabled"}  onClick={() => calculate()}>Рассчитать</Button>
      </div>
      <Composite day={day} month={month} year={year} compositeMonth={compositeMonth} compositeYear={compositeYear}
      visability={compositeVisible === "notVisible" ? "hidden" : "visible"}></Composite>
      <Portrait day={day} month={month} year={year} visability={portraitVisible === "notVisible" ? "hidden" : "visible"}></Portrait>
    </div>
  )
}

export { Selector }