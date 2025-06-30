import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/gilberto_D';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Gilberto Duarte'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;