import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Project from '../components/provedores';

const ProjectMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Proveedores'} />
         <Project />
      </Wrapper>
   );
};

export default ProjectMain;