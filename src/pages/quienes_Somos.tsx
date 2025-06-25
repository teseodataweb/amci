import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import About from '../components/quienes_Somos';

const AboutMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Quienes_Somos'} />
         <About />
      </Wrapper>
   );
};

export default AboutMain;