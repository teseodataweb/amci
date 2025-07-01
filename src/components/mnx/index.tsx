import Service from "./Service"
import Process from "./Process"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterThree from "../../layouts/footers/FooterThree"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Process style={false} />
        <Service style={false} />
      </main>
      <FooterThree />
    </>
  )
}

export default HomeOne
