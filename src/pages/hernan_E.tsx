import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/hernan_E';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Hernán Espinosa Solís'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;