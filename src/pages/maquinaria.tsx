import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Service from '../components/maquinaria';

const ServiceMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Maquinaria'} />
         <Service />
      </Wrapper>
   );
};

export default ServiceMain;