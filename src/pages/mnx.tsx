import Wrapper from '../layouts/Wrapper';
import HomeOne from '../components/mnx';
import SEO from '../components/SEO';

const HomeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'MNX'} />
         <HomeOne />
      </Wrapper>
   );
};

export default HomeMain;