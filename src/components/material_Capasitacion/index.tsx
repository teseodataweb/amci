import FooterThree from "../../layouts/footers/FooterThree"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import FaqArea from "./FaqArea"

const Faq = () => {
  return (
    <>
      <HeaderOne />
      <main>
         <BreadCrumb sub_title="Material Capasitacion" title="Material Capasitacion" />
         <FaqArea />
      </main>
      <FooterThree />
    </>
  )
}

export default Faq
