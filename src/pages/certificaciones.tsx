import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Project from '../components/certificaciones';

const ProjectMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Certificaciones'} />
         <Project />
      </Wrapper>
   );
};

export default ProjectMain;