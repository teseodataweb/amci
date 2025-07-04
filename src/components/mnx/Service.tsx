import { Link } from "react-router-dom"
import { useState } from "react";

interface TabData {
   icon: string;
   title: string;
}
const tab_title: TabData[] = [
   {
      icon: "fas fa-file-alt", // NMX-C-155
      title: "NMX-C-155",
   },
   {
      icon: "fas fa-file-signature", // NMX-C-156
      title: "NMX-C-156",
   },
   {
      icon: "fas fa-file-contract", // NMX-C-159
      title: "NMX-C-159",
   },
   {
      icon: "fas fa-file-invoice", // NMX-C-161
      title: "NMX-C-161",
   },
   {
      icon: "fas fa-file-invoice", // NMX-C-161
      title: "NMX-EC-17025",
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
      title: "Concreto Hidráulico Premezclado",
      desc: "Establece los requisitos técnicos del concreto premezclado para asegurar su resistencia, asentamiento y condiciones de entrega.",
      list: ["Define rangos de resistencia y revenimiento", "Establece condiciones de aceptación y rechazo", "Requiere trazabilidad del proceso de producción"],
   },
   {
      id: 2,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Muestreo de Concreto Fresco",
      desc: "Especifica cómo recolectar muestras de concreto en planta u obra, garantizando representatividad y validez para ensayo.",
      list: ["Procedimiento para toma de muestra", "Requisitos de etiquetado y conservación", "Uso en pruebas de control de calidad"],
   },
   {
      id: 3,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Ensayo de Revenimiento (Slump Test)",
      desc: "Define el método para medir la consistencia del concreto fresco, asegurando que cumpla con el diseño de mezcla.",
      list: ["Uso del cono de Abrams", "Valores límite de aceptación según tipo", "Interpretación de resultados"],
   },
   {
      id: 4,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Ensayo de Compresión en Cilindros",
      desc: "Establece cómo realizar pruebas de compresión en concreto endurecido mediante cilindros curados bajo norma.",
      list: ["Condiciones de curado y edad del cilindro", "Procedimiento para ruptura en prensa", " Criterios para validación de resultados"],
   },
   {
      id: 5,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Laboratorios de Ensayo y Calibración",
      desc: "Norma clave para laboratorios que buscan acreditarse ante EMA. Abarca desde requisitos técnicos hasta gestión de calidad.",
      list: ["Requiere sistema de gestión documental", "Aplicación para empresas con laboratorio interno", "Acreditación respaldada por norma mexicana"],
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
                  <span className="section-sub-title">Normatividad NMX</span>
                  <h3 className="section-title mt-10 text-white p-relative">Cumple con los estándares técnicos del concreto en México</h3>
               </div>
               <Link className="primary-btn-4 btn-hover mt-20" to="/services">
                  TODAS LAS NORMAS &nbsp; | <i className="icon-right-arrow"></i>
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
