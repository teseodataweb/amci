import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeThree from '../components/hoteles';

const HomeThreeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Hoteles'} />
         <HomeThree />
      </Wrapper>
   );
};

export default HomeThreeMain;