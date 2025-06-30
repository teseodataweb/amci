import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/fernando_L';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Fernando Luna Rodríguez'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;