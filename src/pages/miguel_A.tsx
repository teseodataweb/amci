import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/miguel_A';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Miguel Ángel Ramírez Álvarez'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;