import Banner from "./Banner"
import Service from "./Service"
import HeaderThree from "../../layouts/headers/HeaderThree"
import FooterThree from "../../layouts/footers/FooterThree"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <Service />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree
