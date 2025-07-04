import { Link } from "react-router-dom";

interface DataType {
  name: string;
  designation: string;
  desc_1: string;
  desc_2?: string;
  list_items?: string[];
  skillbar: {
    title: string;
    skill: number;
  }[];
  title: string;
  img: string;
}

const teamData = [
  {
    id: 1,
    name: "NMX-EC",
    designation: "Encargado de Validación Técnica",
    desc_1:
      "La NMX-EC regula a los organismos de certificación en México. Garantiza imparcialidad, competencia técnica y continuidad operativa en los procesos de acreditación.",
    desc_2: "¿Cómo funciona?",
    list_items: [
      "Selección de un organismo acreditado por EMA.",
      "Verificación del cumplimiento técnico y de gestión.",
      "Emisión del certificado bajo normatividad oficial.",
    ],
    skillbar: [
      { title: "Confiabilidad técnica", skill: 96 },
      { title: "Reconocimiento nacional", skill: 89 },
      { title: "Relevancia normativa", skill: 98 },
    ],
    title: "Education Background",
    img: "/assets/imgs/team/team-single.jpg",
  },
  {
    id: 2,
    name: "Convenios de Certificación",
    designation: "Alianzas con Entidades Acreditadas",
    desc_1:
      "AMCI establece convenios con instituciones internacionales como NRMCA, ACPA, IMCYC y ACI para ofrecer cursos especializados y certificaciones con reconocimiento global.",
    desc_2: "¿Qué incluye el proceso?",
    list_items: [
      "Revisión de elegibilidad por AMCI.",
      "Canalización a entidad acreditada.",
      "Asesoría técnica y acompañamiento.",
      "Aplicación de tarifas preferenciales.",
    ],
    skillbar: [
      { title: "Accesibilidad de procesos", skill: 90 },
      { title: "Apoyo técnico especializado", skill: 85 },
      { title: "Descuentos exclusivos", skill: 88 },
    ],
    title: "Education Background",
    img: "/assets/imgs/team/team-single.jpg",
  },
  {
    id: 3,
    name: "Certificación de Plantas",
    designation: "Estándares de Calidad Operativa",
    desc_1:
      "Certificación técnica de plantas concreteras en colaboración con la NRMCA, enfocada en producción, almacenamiento y trazabilidad del concreto.",
    desc_2: "Pasos a seguir",
    list_items: [
      "Envío de solicitud y datos operativos.",
      "Confirmación de auditoría con aportación.",
      "Evaluación y envío de check list a NRMCA.",
      "Emisión del certificado con seguimiento anual.",
    ],
    skillbar: [
      { title: "Evaluación técnica", skill: 93 },
      { title: "Control de calidad", skill: 91 },
      { title: "Impacto comercial", skill: 87 },
    ],
    title: "Education Background",
    img: "/assets/imgs/team/team-single.jpg",
  },
  {
    id: 4,
    name: "Curso para Plantas de Concreto",
    designation: "Capacitación en Normativa y Procesos",
    desc_1:
      "Programa educativo que prepara a productores de concreto para cumplir con los requisitos de certificación nacional e internacional.",
    desc_2: "Contenido",
    list_items: [
      "Revisión de normativas AMCI–NRMCA.",
      "Casos prácticos y checklist de verificación.",
      "Evaluación final y constancia oficial.",
      "Duración: 8 horas + break | Máx. 15 participantes.",
    ],
    skillbar: [
      { title: "Contenido técnico-práctico", skill: 94 },
      { title: "Aplicabilidad inmediata", skill: 89 },
      { title: "Satisfacción de participantes", skill: 95 },
    ],
    title: "Education Background",
    img: "/assets/imgs/team/team-single.jpg",
  },
  {
    id: 5,
    name: "Curso de Operadores Bomba Pluma",
    designation: "Formación en Seguridad y Eficiencia",
    desc_1:
      "Certificación avalada por ACPA. Estándar internacional para operadores de bombas de concreto que promueve prácticas seguras y profesionales.",
    desc_2: "Pasos del proceso",
    list_items: [
      "Registro con datos del operador y equipo.",
      "Curso teórico-práctico presencial.",
      "Evaluación final escrita y técnica.",
      "Constancia con reconocimiento ACPA y AMCI.",
    ],
    skillbar: [
      { title: "Mejora en seguridad", skill: 97 },
      { title: "Reducción de errores", skill: 90 },
      { title: "Cumplimiento normativo", skill: 91 },
    ],
    title: "Education Background",
    img: "/assets/imgs/team/team-single.jpg",
  },
  {
    id: 6,
    name: "Curso de Técnicos en Obra – Grado I (ACI/IMCYC)",
    designation: "Certificación para Laboratoristas",
    desc_1:
      "Programa oficial ACI–IMCYC para pruebas al concreto fresco en campo. Requisito previo para certificar supervisores de obra.",
    desc_2: "Incluye",
    list_items: [
      "Curso teórico + práctico.",
      "Exámenes escritos y de desempeño.",
      "Certificado ACI (vigencia 5 años).",
      "Asistencia personalizada para recertificación.",
    ],
    skillbar: [
      { title: "Nivel técnico adquirido", skill: 92 },
      { title: "Mejora en supervisión", skill: 90 },
      { title: "Reconocimiento internacional", skill: 93 },
    ],
    title: "Education Background",
    img: "/assets/imgs/team/team-single.jpg",
  },
];

const TeamDetailsArea = () => {
  return (
    <section className="team-details-page section-space-top">
      <div className="small-container">
        {/* Introducción */}
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">
              Convenios y Certificaciones
            </span>
            <h2 className="section-title mt-10">
              Alianzas que respaldan tu crecimiento técnico
            </h2>
            <p className="mb-35">
              En AMCI generamos convenios estratégicos con organismos líderes e
              instituciones reconocidas para ofrecer a nuestros socios ventajas
              competitivas en capacitación, certificación y posicionamiento
              comercial. Desde acreditaciones técnicas hasta presencia en medios
              especializados, cada alianza está diseñada para fortalecer a las
              concreteras independientes con respaldo normativo, acceso a
              eventos clave y herramientas de valor real.
            </p>
            {/* CTA después de la introducción */}
            <div className="about-btn-box wow fadeInLeft" data-wow-delay="1s">
              <Link className="primary-btn-1 btn-hover" to="/contacto">
                SOLICITA INFORMACIÓN &nbsp; |{" "}
                <i className="icon-right-arrow"></i>
                <span style={{ top: "147.172px", left: "108.5px" }}></span>
              </Link>
            </div>
          </div>
        </div>
        {/* Componentes de detalle */}
        {teamData.map((member, idx) => (
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
        {/* CTA al final de los componentes */}
        <div className="about-btn-box wow fadeInLeft" data-wow-delay="1s">
          <Link className="primary-btn-1 btn-hover" to="/contacto">
            SOLICITA INFORMACIÓN &nbsp; | <i className="icon-right-arrow"></i>
            <span style={{ top: "147.172px", left: "108.5px" }}></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsArea;
