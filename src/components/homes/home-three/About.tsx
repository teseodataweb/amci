import { useState } from "react";
import { Link } from "react-router-dom";
import Count from "../../common/Count";
import VideoPopup from "../../../modals/VideoPopup";

interface DataType {
   sub_title: string;
   title: string;
   desc: string;
   feature_list: {
      id: number;
      icon: string;
      title: string;
      desc: string;
   }[]
}

const about_data: DataType = {
   sub_title: "Sobre AMCI",
   title: "Impulsamos la Fuerza del Concreto Independiente",
   desc: "Desde 2003 representamos a concreteros independientes en todo México. Fortalecemos el gremio a través de alianzas estratégicas, representación gremial activa y formación continua. Promovemos la profesionalización mediante certificaciones, convenios con el IMCYC y programas técnicos que impulsan la sostenibilidad, la calidad y la tecnología en la industria del concreto.",
   feature_list: [
      {
         id: 1,
         icon: "icon-roof",
         title: "Nuestra Historia",
         desc: "AMCI surge en 2003 en el noreste de México, especialmente en Coahuila, Nuevo León y Tamaulipas. Desde entonces, hemos evolucionado junto a nuestros socios y proveedores, reorientando constantemente nuestros objetivos hacia una industria más fuerte y colaborativa.",
      },
      {
         id: 2,
         icon: "icon-roof-9",
         title: "Misión 2025",
         desc: "Brindar beneficios reales a las concreteras afiliadas mediante alianzas con instituciones clave y el respaldo de patrocinadores, fomentando la capacitación, la innovación tecnológica y el desarrollo sustentable en todo el país.",
      },
   ],
}

const { sub_title, title, desc, feature_list } = about_data;

const About = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
      <section className="about-us-section section-space p-relative">
         <div className="shape-area">
            <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/bg/bg-shape-1.png)` }}></div>
            <div className="shape-2 quote-animation" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-7.png)` }}></div>
            <div className="shape-3 quote-animation" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-8.png)` }}></div>
         </div>
         <div className="small-container">
            <div className="row g-4">
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-us-image-area p-relative wow fadeInRight" data-wow-delay=".5s">
                     <div className="border-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-6.png)` }}></div>
                     <figure className="image-1">
                        <img src="/assets/imgs/about/about-1.jpg" alt="" />
                     </figure>
                     <div className="image-2-area">
                        <div className="image-2 p-relative">
                           <img src="/assets/imgs/about/about-1.jpg" alt="" />
                           <div className="play-btn">
                              <div className="video_player_btn">
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video"><i className="icon-play"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="working-area float-bob-y">
                        <div className="inner p-relative">
                           <div className="icon-box">
                              <i className="icon-prize"></i>
                              <h4><span className="counter"><Count number={25} /></span> Years</h4>
                              <p>Working Experience</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-us-content-area p-relative z-1 pl-30">
                     <div className="title-box mb-35 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title">{sub_title}</span>
                        <h3 className="section-title mt-10">{title}</h3>
                     </div>
                     <p className="mb-35 wow fadeInLeft" data-wow-delay=".5s">{desc}</p>
                     {feature_list.map((item) => (
                        <div key={item.id} className="icon-box mb-20 wow fadeInLeft" data-wow-delay=".8s">
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <div className="content">
                              <h5><Link to="/about">{item.title}</Link></h5>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     ))}
                     <div className="about-btn-box wow fadeInLeft" data-wow-delay="1s">
                        <Link className="primary-btn-1 btn-hover" to="/about">
                           Conócenos &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId="eEzD-Y97ges"
         />
      </>
   )
}

export default About
