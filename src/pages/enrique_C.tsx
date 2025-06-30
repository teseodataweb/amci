import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/enrique_C';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Enrique Casas Irigoyen'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;