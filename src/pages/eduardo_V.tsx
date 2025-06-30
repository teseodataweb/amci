import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/eduardo_V';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Eduardo Valencia'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;