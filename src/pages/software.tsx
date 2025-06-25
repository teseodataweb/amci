import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeTwo from '../components/software';

const HomeTwoMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Software'} />
         <HomeTwo />
      </Wrapper>
   );
};

export default HomeTwoMain;