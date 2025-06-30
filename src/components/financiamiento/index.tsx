import About from "./About"
import Features from "./Features"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterOne from "../../layouts/footers/FooterOne"

const DarkHome = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <About style={true} />
        <Features style={true} />
      </main>
      <FooterOne />
    </>
  )
}

export default DarkHome
