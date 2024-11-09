import styles from "./home.module.css";
import { Banner } from "@/components/banner/banner"
import { Buttonsblock } from "@/components/buttonsblock/buttonsblock"
import { Carts } from "@/components/carts/carts"
import { Footer } from "@/components/footer/footer"
import { Selector } from "@/components/selector/selector"

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner></Banner>
      <Selector></Selector>
      <Carts></Carts>
      <Buttonsblock></Buttonsblock>
      <Footer></Footer>
    </div>
  )
}

export { HomePage }