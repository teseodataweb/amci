import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Faq from '../components/gestion';

const FaqMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Gestion'} />
         <Faq />
      </Wrapper>
   );
};

export default FaqMain;