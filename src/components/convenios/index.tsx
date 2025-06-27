import Banner from "./Banner"
import Service from "./Service"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterThree from "../../layouts/footers/FooterThree"

const HomeThree = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Banner />
            <Service />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree
