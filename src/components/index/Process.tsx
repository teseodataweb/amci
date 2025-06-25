interface Datatype {
   id: number;
   icon: string;
   title: string;
   desc: string;
}

const process_data: Datatype[] = [
   {
      id: 1,
      icon: "icon-dollar-tag",
      title: "Red de aliados",
      desc: "Conecta con concreteros independientes, proveedores, ingenieros y consultores de todo el país. Crea vínculos que fortalecen tu negocio.",
   },
   {
      id: 2,
      icon: "icon-engineer",
      title: "Capacitación técnica ",
      desc: "Accede a cursos, talleres y certificaciones avaladas por IMCYC y otros organismos. Profesionaliza a tu equipo y mejora tus procesos.",
   },
   {
      id: 3,
      icon: "icon-home",
      title: "Respaldo gremial",
      desc: "Recibe apoyo institucional para trámites, gestión ante autoridades, convenios especiales y participación activa en el sector.",
   },
];

interface PropType {
   style: boolean;
}

const Process = ({ style }: PropType) => {
   return (
      <section className={`work-process-section section-space p-relative ${style ? "is-dark" : ""}`} style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-51.png" : "/assets/imgs/bg/process-bg.png"})` }}>
         <div className="shape-1" style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-52.png" : "/assets/imgs/bg/line.png"})` }}></div>
         <div className="small-container">
            <div className="title-box text-center mb-60 wow fadeInLeft" data-wow-delay=".5s">
               <span className="section-sub-title">BENEFICIOS AMCI</span>
               <h3 className="section-title mt-10">Unirse a AMCI tiene beneficios concretos</h3>
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
