import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import BreadCrumb from "../common/BreadCrumb"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb sub_title="Convenios Certificacion" title="Convenios Certificacion" />
        <TeamDetailsArea />
      </main>
      <FooterThree />
    </>
  )
}

export default TeamDetails
