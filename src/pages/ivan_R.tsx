import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/ivan_R';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Iván Ruibal Flores'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;