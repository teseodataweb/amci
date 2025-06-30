import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/miguel_C';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Miguel Canto'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;