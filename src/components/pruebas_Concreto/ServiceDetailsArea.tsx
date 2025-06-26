const service_data = {
  title_2: "Servicios Técnicos",
  cert_title: "Certificación en Pruebas de Campo al Concreto",
  cert_desc:
    "Perfecciona la calidad en obra con técnicas avaladas por el IMCYC y ACI. Este programa capacita a los técnicos para realizar, documentar y validar pruebas de campo esenciales en concreto fresco, de acuerdo con los estándares ASTM.",
  grado_title: " Certificación: Técnico en Pruebas al Concreto – Grado I",
  grado_objetivo:
    "Acreditar los conocimientos y habilidades del participante para ejecutar correctamente las pruebas ASTM de control de calidad en concreto fresco.",
  grado_incluye: [
    "Curso teórico y práctico",
    "Exámenes (escrito y de desempeño)",
    "Certificación oficial ACI (vigencia 5 años)",
    "Presentación del profesor en línea",
    "Acompañamiento para recertificación",
  ],
  temario_title: "Temario técnico (normas ASTM):",
  temario: [
    "ASTM C1064: Temperatura del concreto recién mezclado",
    "ASTM C172: Muestreo de concreto fresco",
    "ASTM C143: Prueba de revenimiento (slump test)",
    "ASTM C138: Peso unitario y contenido de aire (método gravimétrico)",
    "ASTM C231: Contenido de aire (método de presión)",
    "ASTM C173: Contenido de aire (método volumétrico)",
    "ASTM C31: Elaboración y curado de especímenes para ensayo",
  ],
  pruebas_title: "Pruebas disponibles",
  pruebas: [
    "Revisión de revenimiento (slump test)",
    "Ensayo de resistencia a compresión",
    "Prueba de asentamiento extendido",
    "Control de temperatura del concreto",
    "Densidad y contenido de aire",
    "Pruebas en cilindros y núcleos",
  ],
};

const {
  title_2,
  cert_title,
  cert_desc,
  grado_title,
  grado_objetivo,
  grado_incluye,
  temario_title,
  temario,
  pruebas_title,
  pruebas,
} = service_data;

const ServiceDetailsArea = () => {
  return (
    <section className="service-details-page section-space">
      <div className="small-container">
        <div className="row">
          <div className="col-12">
            <div className="service-details-page-content">
              <h2 className="mb-30">{title_2}</h2>

              <h3 className="mb-20">{cert_title}</h3>
              <p className="mb-35">{cert_desc}</p>
              <hr />

              <h4 className="mb-15">{grado_title}</h4>
              <strong>Objetivo:</strong>
              <p className="mb-15">{grado_objetivo}</p>
              <strong>Incluye:</strong>
              <ul className="mb-30">
                {grado_incluye.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <hr />

              <h4 className="mb-15">{temario_title}</h4>
              <ul className="mb-30">
                {temario.map((item, i) => (
                  <li key={i}>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <hr />

              <h4 className="mb-15">{pruebas_title}</h4>
              <ul className="service-details-page-list pt-20 pb-10">
                {pruebas.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <figure className="w-img mt-30">
                <img
                  src="/assets/imgs/service/service-details-1.jpg"
                  alt=""
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsArea;
