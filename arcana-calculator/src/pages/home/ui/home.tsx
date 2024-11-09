import styles from "./home.module.css";
import { Banner } from "@/components/banner/banner"
import { Buttonsblock } from "@/components/buttonsblock/buttonsblock"
import { Carts } from "@/components/carts/carts"
import { Composite } from "@/components/composite/composite";
import { Footer } from "@/components/footer/footer"
import { Selector } from "@/components/selector/selector"

function HomePage() {
  return (
    <main className={styles.container}>
      <Banner/>
      <Selector/>
      <Carts/>
      <Buttonsblock/>
      <Footer/>
    </main>
  )
}

export { HomePage }