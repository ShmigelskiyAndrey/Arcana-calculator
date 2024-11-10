"use client"

import { Arrow } from "../../shared/arrow/arrow";
import { Button } from "../../shared/button/button";
import styles from "./buttonsblock.module.css";

function Buttonsblock() {
  const onClick = (text: any) => {
    console.log(text)
  }

  return (
    <div className={styles.container}>
      <Button style={"info"} onClick={() => onClick("school")}>Школа Со-творчество жизни <Arrow color={"#373636"}></Arrow></Button>
      <Button style={"info"} onClick={() => onClick("tg")}>Важное в Телеграм <Arrow color={"#373636"}></Arrow></Button>
      <Button style={"info"} onClick={() => onClick("chat")}>Рады общению <Arrow color={"#373636"}></Arrow></Button>
    </div>
  )
}

export { Buttonsblock }