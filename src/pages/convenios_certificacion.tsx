import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TeamDetails from '../components/convenios_sertificacion';

const TeamDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Convenios certificacion'} />
         <TeamDetails />
      </Wrapper>
   );
};

export default TeamDetailsMain;