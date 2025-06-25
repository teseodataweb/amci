import Service from "./Service"
import Process from "./Process"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterOne from "../../layouts/footers/FooterOne"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Process style={false} />
        <Service style={false} />
      </main>
      <FooterOne />
    </>
  )
}

export default HomeOne
