import ServiceArea from "./ServiceArea"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import FooterThree from "../../layouts/footers/FooterThree"
import Choose from "./Choose"
import Counter from "./Counter"

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
