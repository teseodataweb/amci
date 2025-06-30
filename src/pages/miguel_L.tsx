import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/miguel_L';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Miguel Leal Gutiérrez'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;