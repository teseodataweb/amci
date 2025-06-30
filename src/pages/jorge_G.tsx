import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/jorge_G';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Jorge González Garrido'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;