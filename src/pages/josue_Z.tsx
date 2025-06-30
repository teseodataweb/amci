import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/mesa_Directiva/miembros/josue_Z';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Josue Zaragoza Santos'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;