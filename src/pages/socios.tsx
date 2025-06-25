import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Project from '../components/socios';

const ProjectMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Socios'} />
         <Project />
      </Wrapper>
   );
};

export default ProjectMain;