import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Faq from '../components/material_Capasitacion';

const FaqMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Material de Capasitación'} />
         <Faq />
      </Wrapper>
   );
};

export default FaqMain;