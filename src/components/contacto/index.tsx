import FooterThree from '../../layouts/footers/FooterThree'
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from '../common/BreadCrumb'
import ContactArea from './ContactArea'
import ContactMap from './ContactMap'

const Contact = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title='Contacto' title='Contacto' />
            <ContactArea />
            <ContactMap />
         </main>
         <FooterThree />
      </>
   )
}

export default Contact
