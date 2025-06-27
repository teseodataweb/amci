import Banner from "./Banner"
import ChooseArea from "./ChooseArea"
import FooterTwo from "../../layouts/footers/FooterTwo"
import HeaderOne from "../../layouts/headers/HeaderOne"

const HomeTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Banner />
            <ChooseArea />
         </main>
         <FooterTwo />
      </>
   )
}

export default HomeTwo
