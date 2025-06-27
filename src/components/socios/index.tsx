import FooterThree from "../../layouts/footers/FooterThree"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import ProjectArea from "./ProjectArea"

const Project = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Proveedores" title="Proveedores" />
            <ProjectArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Project
