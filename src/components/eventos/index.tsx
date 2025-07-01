import Banner from "./Banner"
import About from "./About"
import Service from "./Service"
import FooterThree from "../../layouts/footers/FooterThree"
import HeaderOne from "../../layouts/headers/HeaderOne"

const HomeTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Banner />
            <About />
            <Service />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeTwo
