import ServiceArea from "./ServiceArea"
import HeaderThree from "../../layouts/headers/HeaderThree"
import BreadCrumb from "../common/BreadCrumb"
import FooterThree from "../../layouts/footers/FooterThree"
import Choose from "../homes/home-three/Choose"
import Counter from "../homes/home-one/Counter"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Service = () => {
   return (
      <>
         <HeaderThree />
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
