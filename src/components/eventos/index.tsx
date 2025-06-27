import Banner from "./Banner"
import About from "./About"
import Service from "./Service"
import FooterTwo from "../../layouts/footers/FooterTwo"
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
         <FooterTwo />
      </>
   )
}

export default HomeTwo
