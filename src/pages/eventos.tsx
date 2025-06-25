import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeTwo from '../components/eventos';

const HomeTwoMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Eventos'} />
         <HomeTwo />
      </Wrapper>
   );
};

export default HomeTwoMain;