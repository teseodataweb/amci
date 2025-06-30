import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/jimena_M';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Jimena Muñoz Albarrán'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;