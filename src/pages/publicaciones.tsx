import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Project from '../components/publicaciones';

const ProjectMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Publicaciones'} />
         <Project />
      </Wrapper>
   );
};

export default ProjectMain;