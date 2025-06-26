import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import BreadCrumb from "../common/BreadCrumb"
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Pruebas concreto" title="Pruebas concreto" />
            <ServiceDetailsArea />
         </main>
         <FooterThree />
      </>
   )
}

export default ServiceDetails
