import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from '../pages/index'
// import HomeMain from '../pages/HomeMain'
// import HomeTwoMain from '../pages/HomeTwoMain';
import Eventos from '../pages/eventos';
import HomeThreeMain from '../pages/HomeThreeMain';
import DarkHomeMain from '../pages/DarkHomeMain';
// import AboutMain from '../pages/AboutMain';
import QuienesSomos from '../pages/quienes_Somos';
import ServiceMain from '../pages/ServiceMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
// import ProjectMain from '../pages/ProjectMain';
import Proveedores from '../pages/proveedores';
import Socios from '../pages/socios';
import Certificaciones from '../pages/certificaciones';
import Convenios from '../pages/convenios';
import ProjectDetailsMain from '../pages/ProjectDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import FaqMain from '../pages/FaqMain';
import BlogStandardMain from '../pages/BlogStandardMain';
import BlogGridMain from '../pages/BlogGridMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
// import ContactMain from '../pages/ContactMain';
import Contacto from '../pages/contacto';
import Maquinaria from '../pages/maquinaria';
import Software from '../pages/software';
import Gestion from '../pages/gestion';
import Hoteles from '../pages/hoteles';
import MNX from '../pages/mnx';
import ConveniosCertificacion from '../pages/convenios_certificacion';
import Material_Capasitacion from '../pages/material_Capasitacion';
import Pruebas_Concreto from '../pages/pruebas_Concreto';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/home-three" element={<HomeThreeMain />} />
        <Route path="/dark-home" element={<DarkHomeMain />} />
        <Route path="/quienes_Somos" element={<QuienesSomos />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/services-details" element={<ServiceDetailsMain />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/socios" element={<Socios />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/convenios" element={<Convenios />} />
        <Route path="/project-details" element={<ProjectDetailsMain />} />
        <Route path="/team" element={<TeamMain />} />
        <Route path="/team-details" element={<TeamDetailsMain />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/blog-standard" element={<BlogStandardMain />} />
        <Route path="/blog-grid" element={<BlogGridMain />} />
        <Route path="/blog-details" element={<BlogDetailsMain />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/maquinaria" element={<Maquinaria />} />
        <Route path="/software" element={<Software />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/hoteles" element={<Hoteles />} />
        <Route path="/pruebas_Concreto" element={<Pruebas_Concreto />} />
        <Route path="/mnx" element={<MNX />} />
        <Route path="/convenios_sertificacion" element={<ConveniosCertificacion />} />
        <Route path="/material_Capasitacion" element={<Material_Capasitacion />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
