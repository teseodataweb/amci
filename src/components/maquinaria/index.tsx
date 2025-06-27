import ServiceArea from "./ServiceArea"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import FooterThree from "../../layouts/footers/FooterThree"
import Choose from "../homes/home-three/Choose"
import Counter from "../homes/home-one/Counter"

const Service = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Maquinaria" title="Maquinaria" />
            <ServiceArea />
            <Choose />
            <Counter style={false} />
         </main>
         <FooterThree />
      </>
   )
}

export default Service
