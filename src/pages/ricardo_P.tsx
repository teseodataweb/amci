import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/ricardo_P';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Ricardo Pepi Sandoval'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;