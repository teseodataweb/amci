import FooterThree from "../../layouts/footers/FooterThree"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import TeamArea from "./TeamArea"

const Team = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Mesa Directiva" title="Mesa Directiva" />
            <TeamArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Team
