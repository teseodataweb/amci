import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/adrian_M';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Adrián Maynes García'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;