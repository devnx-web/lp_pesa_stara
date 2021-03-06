import Header from '../components/layout/header.js'
import Banner from "../sections/banner.js"
import Comvoce from "../sections/juntocomvoce.js"
import Infos from "../sections/infos.js"
import Agricultura from '../sections/agricultura.js'
import Noticias from "../sections/noticias.js"
import Indicadores from '../sections/indicadores.js'
import Form from '../sections/form.js'
import Footer from '../components/layout/footer.js'
import Footer2 from '../components/layout/footer2.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Comvoce/>
      <Infos/>
      <Agricultura/>
      <Noticias/>
      <Indicadores/>
      <Form/>
      <Footer/>
      <Footer2/>
    </div>
  )
}
