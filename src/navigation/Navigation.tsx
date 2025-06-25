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
import ProjectDetailsMain from '../pages/ProjectDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import FaqMain from '../pages/FaqMain';
import BlogStandardMain from '../pages/BlogStandardMain';
import BlogGridMain from '../pages/BlogGridMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
// import ContactMain from '../pages/ContactMain';
import Contacto from '../pages/contacto';
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
        <Route path="/project-details" element={<ProjectDetailsMain />} />
        <Route path="/team" element={<TeamMain />} />
        <Route path="/team-details" element={<TeamDetailsMain />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/blog-standard" element={<BlogStandardMain />} />
        <Route path="/blog-grid" element={<BlogGridMain />} />
        <Route path="/blog-details" element={<BlogDetailsMain />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
