import AboutHome from "../homes/home-three/About"
import BreadCrumb from "../common/BreadCrumb"
import Choose from "../homes/home-three/Choose"
import Process from "./Process"
import HeaderThree from "../../layouts/headers/HeaderThree"
import FooterThree from "../../layouts/footers/FooterThree"

const About = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Quienes somos" title="Quienes Somos" />
            <AboutHome />
            <Choose />
            <Process style={false} />
            <FooterThree />
         </main>
      </>
   )
}

export default About
