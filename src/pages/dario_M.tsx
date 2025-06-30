import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/dario_M';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Darío Martínez Álvarez'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;