import Banner from "./Banner"
import Service from "./Service"
import Choose from "./Choose"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterThree from "../../layouts/footers/FooterThree"

const HomeThree = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Banner />
            <Service />
            <Choose />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree
