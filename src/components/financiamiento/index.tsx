import About from "./About"
import Features from "./Features"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterThree from "../../layouts/footers/FooterThree"

const DarkHome = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <About style={true} />
        <Features style={true} />
      </main>
      <FooterThree />
    </>
  )
}

export default DarkHome
