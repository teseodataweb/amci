import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/ramiro_J';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Ramiro José Páez Cruz'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;