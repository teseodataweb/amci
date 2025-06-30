import FooterThree from "../../../../layouts/footers/FooterThree"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Horacio del Castillo Lafuente" title="Horacio del Castillo Lafuente" />
        <TeamDetailsArea />
      </main>
      <FooterThree />
    </>
  )
}

export default TeamDetails
