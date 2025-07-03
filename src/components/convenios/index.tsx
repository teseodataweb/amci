import Banner from "./Banner"
import Service from "./Service"
import Service2 from "./Service2"
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
            <Service2 />
            <Choose />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree
