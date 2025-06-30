import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Team from '../components/mesa_Directiva';

const TeamMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Mesa directiva'} />
         <Team />
      </Wrapper>
   );
};

export default TeamMain;