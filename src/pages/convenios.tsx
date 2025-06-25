import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeThree from '../components/convenios';

const HomeThreeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Convenios'} />
         <HomeThree />
      </Wrapper>
   );
};

export default HomeThreeMain;