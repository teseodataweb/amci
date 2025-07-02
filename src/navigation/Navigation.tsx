import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from '../pages/index'
import Eventos from '../pages/eventos';
import HomeThreeMain from '../pages/HomeThreeMain';
import DarkHomeMain from '../pages/DarkHomeMain';
import QuienesSomos from '../pages/quienes_Somos';
import ServiceMain from '../pages/ServiceMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import Proveedores from '../pages/proveedores';
import Socios from '../pages/socios';
import Certificaciones from '../pages/certificaciones';
import Publicaciones from '../pages/publicaciones';
import Convenios from '../pages/convenios';
import ProjectDetailsMain from '../pages/ProjectDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import FaqMain from '../pages/FaqMain';
import BlogStandardMain from '../pages/BlogStandardMain';
import BlogGridMain from '../pages/BlogGridMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import Contacto from '../pages/contacto';
import Maquinaria from '../pages/maquinaria';
import Software from '../pages/software';
import Gestion from '../pages/gestion';
import MNX from '../pages/mnx';
import ConveniosCertificacion from '../pages/convenios_certificacion';
import Material_Capasitacion from '../pages/material_Capasitacion';
import Pruebas_Concreto from '../pages/pruebas_Concreto';
import Financiamiento from '../pages/financiamiento';
import Mesa_Directiva from '../pages/mesa_Directiva';
import Josue_Z from '../pages/josue_Z';
import Jorge_G from '../pages/jorge_G';
import David_M from '../pages/david_M';
import Ana_E from '../pages/ana_E';
import Hernan_E from '../pages/hernan_E';
import Enrique_C from '../pages/enrique_C';
import Jimena_M from '../pages/jimena_M';
import Miguel_L from '../pages/miguel_L';
import Horacio_C from '../pages/horacio_C';
import Gilberto_D from '../pages/gilberto_D';
import Mauro_G from '../pages/mauro_G';
import Ivan_R from '../pages/ivan_R';
import Adrian_M from '../pages/adrian_M';
import Miguel_A from '../pages/miguel_A';
import Diego_E from '../pages/diego_E';
import Eduardo_V from '../pages/eduardo_V';
import Miguel_C from '../pages/miguel_C';
import Fernando_L from '../pages/fernando_L';
import Erik_F from '../pages/erik_F';
import Emmanuel_G from '../pages/emmanuel_G';
import Dario_M from '../pages/dario_M';
import Ricardo_P from '../pages/ricardo_P';
import Ramiro_J from '../pages/ramiro_J';
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
        <Route path="/publicaciones" element={<Publicaciones />} />
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
        <Route path="/pruebas_Concreto" element={<Pruebas_Concreto />} />
        <Route path="/mnx" element={<MNX />} />
        <Route path="/convenios_certificacion" element={<ConveniosCertificacion />} />
        <Route path="/material_Capasitacion" element={<Material_Capasitacion />} />
        <Route path="/financiamiento" element={<Financiamiento />} />
        <Route path="/mesa_Directiva" element={<Mesa_Directiva />} />
        <Route path="/josue_Z" element={<Josue_Z />} />
        <Route path="/jorge_G" element={<Jorge_G />} />
        <Route path="/david_M" element={<David_M />} />
        <Route path="/ana_E" element={<Ana_E />} />
        <Route path="/hernan_E" element={<Hernan_E />} />
        <Route path="/enrique_C" element={<Enrique_C />} />
        <Route path="/jimena_M" element={<Jimena_M />} />
        <Route path="/miguel_L" element={<Miguel_L />} />
        <Route path="/horacio_C" element={<Horacio_C />} />
        <Route path="/gilberto_D" element={<Gilberto_D />} />
        <Route path="/mauro_G" element={<Mauro_G />} />
        <Route path="/ivan_R" element={<Ivan_R />} />
        <Route path="/adrian_M" element={<Adrian_M />} />
        <Route path="/miguel_A" element={<Miguel_A />} />
        <Route path="/diego_E" element={<Diego_E />} />
        <Route path="/eduardo_V" element={<Eduardo_V />} />
        <Route path="/miguel_C" element={<Miguel_C />} />
        <Route path="/fernando_L" element={<Fernando_L />} />
        <Route path="/erik_F" element={<Erik_F />} />
        <Route path="/emmanuel_G" element={<Emmanuel_G />} />
        <Route path="/dario_M" element={<Dario_M />} />
        <Route path="/ricardo_P" element={<Ricardo_P />} />
        <Route path="/ramiro_J" element={<Ramiro_J />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
