import FooterThree from "../../../../layouts/footers/FooterThree"
import HeaderOne from "../../../../layouts/headers/HeaderOne"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Adrián Maynes García" title="Adrián Maynes García" />
        <TeamDetailsArea />
      </main>
      <FooterThree />
    </>
  )
}

export default TeamDetails
