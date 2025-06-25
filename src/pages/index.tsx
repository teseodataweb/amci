import Wrapper from '../layouts/Wrapper';
import HomeOne from '../components/index';
import SEO from '../components/SEO';

const HomeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Index'} />
         <HomeOne />
      </Wrapper>
   );
};

export default HomeMain;