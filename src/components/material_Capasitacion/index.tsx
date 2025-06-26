import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import BreadCrumb from "../common/BreadCrumb"
import FaqArea from "./FaqArea"

const Faq = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Material Capasitacion" title="Material Capasitacion" />
         <FaqArea />
      </main>
      <FooterThree />
    </>
  )
}

export default Faq
