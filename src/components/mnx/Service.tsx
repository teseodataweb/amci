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
      desc: "Esta norma establece los requisitos técnicos y operativos que debe cumplir el concreto hidráulico premezclado en cuanto a resistencia, consistencia y entrega.",
      list: ["Define rangos de resistencia y asentamiento", "Establece condiciones de aceptación y rechazo", "Requiere control documental del proceso"],
   },
   {
      id: 2,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Muestreo de Concreto Fresco",
      desc: "Protocolo para recolectar muestras representativas del concreto fresco en condiciones de obra o planta para ensayos de calidad.",
      list: ["Procedimiento de muestreo en obra o en planta", "Criterios para validación de la muestra", "Instrucciones para etiquetado y resguardo"],
   },
   {
      id: 3,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Ensayo de Revenimiento (Slump Test)",
      desc: "Especifica el método para medir la consistencia del concreto mediante el cono de Abrams, garantizando uniformidad en el diseño de mezcla.",
      list: ["Procedimiento paso a paso con cono", "Interpretación de resultados", "Tolerancias aceptadas según tipo de mezcla"],
   },
   {
      id: 4,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Ensayo de Compresión en Cilindros",
      desc: "Método oficial para determinar la resistencia a compresión del concreto endurecido mediante cilindros moldeados y curados.",
      list: ["Definición de curado y condiciones ambientales", "Uso de prensa calibrada para ruptura", "Registro y validación de resultados"],
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
