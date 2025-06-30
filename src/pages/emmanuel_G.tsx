import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/emmanuel_G';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Emmanuel Guillermo García Villarreal'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;