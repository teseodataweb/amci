interface Datatype {
   id: number;
   icon: string;
   title: string;
   desc: string;
}

const process_data: Datatype[] = [
   {
      id: 1,
      icon: "fas fa-search", // Diagnóstico normativo
      title: "Diagnóstico normativo",
      desc: "Evaluamos tus operaciones frente a la norma NMX-EC-17025 para detectar brechas técnicas y documentales.",
   },
   {
      id: 2,
      icon: "fas fa-tools", // Implementación de requisitos
      title: "Implementación de requisitos",
      desc: "Aplicamos mejoras operativas y de gestión para alinear tu laboratorio o planta con los criterios exigidos por la EMA y la LFMN.",
   },
   {
      id: 3,
      icon: "fas fa-certificate", // Validación y certificación
      title: "Validación y certificación",
      desc: "Preparamos tu expediente técnico, ensayos y auditorías para obtener la acreditación oficial ante organismos competentes.",
   },
];

interface PropType {
   style: boolean;
}

const Process = ({ style }: PropType) => {
   return (
      <section className={`work-process-section section-space p-relative ${style ? "is-dark" : ""}`} style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-51.png" : "/assets/imgs/bg/process-bg.png"})` }}>
         <div className="top-padding"></div>
         <div className="shape-1" style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-52.png" : "/assets/imgs/bg/line.png"})` }}></div>
         <div className="small-container">
            <div className="title-box text-center mb-60 wow fadeInLeft" data-wow-delay=".5s">
               <span className="section-sub-title">Normas NMX</span>
               <h3 className="section-title mt-10">Cumplimiento técnico paso a paso</h3>
            </div>
            <div className="row g-4">
               {process_data.map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="work-process-box text-center ">
                        <div className="icon-box p-relative">
                           <i className={item.icon}></i>
                           <span>{item.id}</span>
                        </div>
                        <div className="content">
                           <h4 className="pt-25 pb-25">{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Process
