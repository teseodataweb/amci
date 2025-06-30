import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/horacio_C';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Horacio del Castillo Lafuente'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;