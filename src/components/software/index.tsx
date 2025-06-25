import Banner from "./Banner"
import ChooseArea from "./ChooseArea"
import FooterTwo from "../../layouts/footers/FooterTwo"
import HeaderTwo from "../../layouts/headers/HeaderTwo"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <main>
            <Banner />
            <ChooseArea />
         </main>
         <FooterTwo />
      </>
   )
}

export default HomeTwo
