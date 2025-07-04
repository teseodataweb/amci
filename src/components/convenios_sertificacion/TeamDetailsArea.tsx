import { Link } from "react-router-dom";

interface DataType {
  name: string;
  designation: string;
  desc_1: string;
  desc_2?: string; // Nueva descripción opcional
  list_items?: string[]; // Nuevo listado opcional
  skillbar: {
    title: string;
    skill: number;
  }[];
  title: string;
  img: string; // Nueva propiedad para la imagen
}

const team_data: DataType = {
  name: "NMX-EC",
  designation: "Encargado de Validación Técnica",
  desc_1:
    "La NMX-EC regula a los organismos de certificación. Asegura su imparcialidad, competencia y continuidad operativa.",
  desc_2: "¿Cómo funciona?",
  list_items: [
    "Selección de un organismo acreditado por EMA.",
    "Verificación del cumplimiento de requisitos técnicos y de gestión.",
    "Emisión del certificado bajo acreditación oficial.",
  ],
  skillbar: [
    { title: "Confiabilidad técnica", skill: 96 },
    { title: "Reconocimiento nacional", skill: 89 },
    { title: "Relevancia normativa", skill: 98 },
  ],
  title: "Education Background",
  img: "/assets/imgs/team/team-single.jpg",
};
const team_data2: DataType = {
  name: "Convenios de Certificación",
  designation: "Alianzas con Entidades Acreditadas",
  desc_1:
    "AMCI facilita el acceso a certificaciones formales mediante convenios con entidades autorizadas.",
  desc_2: "¿Qué incluye el proceso?",
  list_items: [
    "Revisión inicial de elegibilidad por parte de AMCI.",
    "Canalización a organismo acreditado.",
    "Seguimiento técnico y asesoría en sitio.",
    "Aplicación de tarifas preferenciales.",
  ],
  skillbar: [
    { title: "Accesibilidad de procesos", skill: 90 },
    { title: "Apoyo técnico especializado", skill: 85 },
    { title: "Descuentos exclusivos", skill: 88 },
  ],
  title: "Education Background",
  img: "/assets/imgs/team/team-single.jpg",
};
const team_data3: DataType = {
  name: "Certificación de Plantas",
  designation: "Estándares de Calidad Operativa",
  desc_1:
    "Evalúa el cumplimiento en producción, almacenamiento y control del concreto.",
  desc_2: "¿Qué pasos lleva?",
  list_items: [
    "Diagnóstico preliminar de cumplimiento.",
    "Ajustes técnicos y administrativos con acompañamiento.",
    "Auditoría formal por entidad certificadora.",
    "Emisión de certificado y seguimiento anual.",
  ],
  skillbar: [
    { title: "Evaluación técnica", skill: 93 },
    { title: "Control de calidad", skill: 91 },
    { title: "Impacto comercial", skill: 87 },
  ],
  title: "Education Background",
  img: "/assets/imgs/team/team-single.jpg",
};
const team_data4: DataType = {
  name: "Curso para Plantas de Concreto",
  designation: "Capacitación en Normativa y Procesos",
  desc_1:
    "Formación enfocada en los criterios de certificación de plantas.",
  desc_2: "¿Qué incluye?",
  list_items: [
    "Introducción a normativas clave (NMX y criterios AMCI).",
    "Casos prácticos sobre control de producción y trazabilidad.",
    "Simulación de auditorías y checklist.",
    "Evaluación final y constancia.",
  ],
  skillbar: [
    { title: "Contenido técnico-práctico", skill: 94 },
    { title: "Aplicabilidad inmediata", skill: 89 },
    { title: "Satisfacción de participantes", skill: 95 },
  ],
  title: "Education Background",
  img: "/assets/imgs/team/team-single.jpg",
};
const team_data5: DataType = {
  name: "Curso de Operadores Bomba Pluma",
  designation: "Formación en Seguridad y Eficiencia",
  desc_1:
    "Entrenamiento obligatorio para operadores que deseen certificarse.",
  desc_2: "Pasos del proceso:",
  list_items: [
    "Registro con datos de equipo y operador.",
    "Curso presencial con prácticas y teoría de seguridad.",
    "Evaluación técnica y operativa.",
    "Constancia con validez ante autoridades y AMCI.",
  ],
  skillbar: [
    { title: "Mejora en seguridad", skill: 97 },
    { title: "Reducción de errores", skill: 90 },
    { title: "Cumplimiento normativo", skill: 91 },
  ],
  title: "Education Background",
  img: "/assets/imgs/team/team-single.jpg",
};

const teamList = [team_data, team_data2, team_data3, team_data4, team_data5];

const TeamDetailsArea = () => {
  return (
    <section className="team-details-page section-space-top">
      <div className="small-container">
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">Convenios y Certificaciones</span>
            <h2 className="section-title mt-10">
              Alianzas que respaldan tu crecimiento técnico
            </h2>
            <p className="mb-35">
              En AMCI generamos convenios estratégicos con organismos líderes e instituciones reconocidas para ofrecer a nuestros socios ventajas competitivas en capacitación, certificación y posicionamiento comercial. Desde acreditaciones técnicas hasta presencia en medios especializados, cada alianza está diseñada para fortalecer a las concreteras independientes con respaldo normativo, acceso a eventos clave y herramientas de valor real.
            </p>
          </div>
        </div>
        {teamList.map((member, idx) => (
          <div className="team-member-info mb-80" key={idx}>
            <div className="row">
              <div className="col-xxl-5">
                <div className="team-member-info-image-area p-relative">
                  <figure className="w-img">
                    <img src={member.img} alt={member.name} />
                  </figure>
                  <ul className="team-member-socials-icon">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-7 pl-20">
                <h5 className="pt-20">{member.name}</h5>
                <h6 className="mb-25 mt-20 designation">
                  {member.designation}
                </h6>
                <hr />
                <p className="mt-40 mb-40">{member.desc_1}</p>
                {member.desc_2 && <p className="mb-20">{member.desc_2}</p>}
                {member.list_items && member.list_items.length > 0 && (
                  <ul className="mb-40">
                    {member.list_items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {member.skillbar.map((item, i) => (
                  <div key={i} className="team-details-progress-bar p-relative">
                    <h6>{item.title}</h6>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        data-width={`${item.skill}%`}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{
                          width: `${item.skill}%`,
                          visibility: "visible",
                          animationDuration: "1s",
                          animationDelay: "0.3s",
                          animationName: "slideInLeft",
                        }}
                      ></div>
                    </div>
                    <span className="progress-count">{item.skill}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamDetailsArea;
