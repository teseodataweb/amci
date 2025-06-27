import FooterThree from "../../layouts/footers/FooterThree"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Pruebas concreto" title="Pruebas concreto" />
            <ServiceDetailsArea />
         </main>
         <FooterThree />
      </>
   )
}

export default ServiceDetails
