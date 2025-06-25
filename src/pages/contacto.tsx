import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Contact from '../components/contacto';

const ContactMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contacto'} />
         <Contact />
      </Wrapper>
   );
};

export default ContactMain;