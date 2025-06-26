import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ServiceDetails from '../components/pruebas_Concreto';

const ServiceDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Pruebas concreto'} />
         <ServiceDetails />
      </Wrapper>
   );
};

export default ServiceDetailsMain;