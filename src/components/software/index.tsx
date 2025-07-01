import Banner from "./Banner"
import ChooseArea from "./ChooseArea"
import FooterThree from "../../layouts/footers/FooterThree"
import HeaderOne from "../../layouts/headers/HeaderOne"

const HomeTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Banner />
            <ChooseArea />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeTwo
