import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/mauro_G';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Mauro González Jr.'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;