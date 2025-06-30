import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/david_M';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'David Marcelo González Serna'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;