import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import DarkHome from '../components/financiamiento';

const DarkHomeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Financiamiento'} />
         <DarkHome />
      </Wrapper>
   );
};

export default DarkHomeMain;