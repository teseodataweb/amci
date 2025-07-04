import Service from "./Service"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterThree from "../../layouts/footers/FooterThree"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Service style={false} />
      </main>
      <FooterThree />
    </>
  )
}

export default HomeOne
