import Banner from "./Banner"
import About from "./About"
import Service from "./Service"
import FooterTwo from "../../layouts/footers/FooterTwo"
import HeaderTwo from "../../layouts/headers/HeaderTwo"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
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
