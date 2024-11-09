
import { Cart1 } from "../cart1/cart1";
import { Cart2 } from "../cart2/cart2";
import { Cart3 } from "../cart3/cart3";
import { Cart4 } from "../cart4/cart4";
import styles from "./carts.module.css";

function Carts() {
  return (
    <div className={styles.container}>
      <Cart1></Cart1>
      <Cart2></Cart2>
      <Cart3></Cart3>
      <Cart4></Cart4>
    </div>
  )
}

export { Carts }