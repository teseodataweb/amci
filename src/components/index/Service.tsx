import { Link } from "react-router-dom"
import { useState } from "react";

interface TabData {
   icon: string;
   title: string;
}
const tab_title: TabData[] = [
   {
      icon: "icon-roof-7",
      title: "Afiliación AMCI",
   },
   {
      icon: "icon-roof-2",
      title: "Capacitación técnica",
   },
   {
      icon: "icon-roof-8",
      title: "Certificaciones & NMX",
   },
   {
      icon: "icon-roof-4",
      title: "Vinculación con proveedores",
   },
];

interface DataType {
   id: number;
   thumb: string;
   title: string;
   desc: string;
   list: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Conecta con la comunidad",
      desc: "Formar parte de AMCI significa integrarte a una red de concreteros independientes en todo el país. Con tu afiliación, accedes a eventos exclusivos, vinculación con proveedores estratégicos y representación ante instituciones del sector.",
      list: ["Representación gremial activa", "Eventos y desayunos regionales", "Boletines y publicaciones especializadas"],
   },
   {
      id: 2,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Cursos especializados",
      desc: "Desde operación segura de bomba pluma hasta normativas técnicas NMX, nuestros programas están diseñados para elevar el nivel profesional de concreteros y sus equipos.",
      list: ["Cursos presenciales y online", "Convenios con IMCYC y certificadoras", "Formación práctica y avalada por expertos"],
   },
   {
      id: 3,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Cumple con la normativa",
      desc: "Te guiamos paso a paso en el proceso de certificación de planta, personal o procesos conforme a las Normas Mexicanas (NMX). Aprovecha descuentos con organismos aliados como el IMCYC.",
      list: ["Asesoría personalizada", "Normas NMX vigentes y aplicables", "Certificaciones de planta, transporte y muestreo"],
   },
   {
      id: 4,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Mejores precios",
      desc: "Como miembro de AMCI, obtienes beneficios exclusivos con proveedores líderes en cemento, maquinaria, aditivos, refacciones, software y más.",
      list: ["Convenios con Cemex, Moctezuma, Odisa", "Acceso a créditos y financiamiento", "Ahorros reales y apoyo logístico"],
   },
];

interface PropType {
   style: boolean;
}

const Service = ({ style }: PropType) => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <section className={`service-tab-section section-space bg-color-1 p-relative ${style ? "is-dark" : ""}`}>
         <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-35.png)` }}></div>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-33.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-34.png)` }}></div>
         <div className="small-container">
            <div className="service-tab-title-area mb-70">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">Servicios para concreteros que impulsan tu operación</span>
                  <h3 className="section-title mt-10 text-white p-relative">Soluciones técnicas, logísticas y gremiales para la industria del concreto</h3>
               </div>
               <Link className="primary-btn-4 btn-hover mt-20" to="/services">
                  Leer más &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>

            <div className="row">
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="service-tab-btn-area wow fadeInLeft" data-wow-delay="500ms">
                     <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {tab_title.map((tab, index) => (
                           <li key={index} className="nav-item" role="presentation">
                              <a className={`nav-link ${activeTab === index ? "active" : ""}`} onClick={() => handleTabClick(index)} id="modified-roofing-tab" style={{ cursor: "pointer" }}>
                                 <div className="icon-box">
                                    <i className={tab.icon}></i>
                                 </div>
                                 {tab.title}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-tab-details-area">
                     <div className="tab-content" id="myTabContent">
                        {service_data.map((item, index) => (
                           <div key={item.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="modified-roofing-tab-pane">
                              <div className="service-tab-content p-relative">
                                 {!style && <div className="tab-bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-32.png)` }}></div>}
                                 <figure className="image p-relative">
                                    <img src={item.thumb} alt="" />
                                 </figure>
                                 <div className="content p-relative">
                                    <h4>{item.title}</h4>
                                    <p className="pt-15 pb-10">{item.desc}</p>
                                    <ul className="tab-list-content">
                                       {item.list.map((list, i) => (
                                          <li key={i}>{list}</li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Service
