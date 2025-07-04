import { useState } from "react";

interface TabData {
  icon: string;
  title: string;
}
const tab_title: TabData[] = [
  {
    icon: "fas fa-thermometer-half", // Medición de temperatura del concreto
    title: "ASTM C1064",
  },
  {
    icon: "fas fa-vial", // Muestreo de concreto fresco
    title: "ASTM C172",
  },
  {
    icon: "fas fa-ruler-vertical", // Prueba de revenimiento (slump test)
    title: "ASTM C143",
  },
  {
    icon: "fas fa-weight", // Peso unitario y contenido de aire (gravimétrico)
    title: "ASTM C138",
  },
  {
    icon: "fas fa-tint", // Contenido de aire (método de presión)
    title: "ASTM C231",
  },
  {
    icon: "fas fa-wind", // Contenido de aire (método volumétrico)
    title: "ASTM C173",
  },
  {
    icon: "fas fa-flask", // Elaboración y curado de especímenes
    title: "ASTM C31",
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
    title: "Medición de Temperatura del Concreto Fresco",
    desc: "Método para verificar que la mezcla recién producida se mantenga dentro del rango térmico permitido antes del colado.",
    list: [
      "Uso de termómetro certificado",
      "Toma directa desde el recipiente o camión",
      "Margen de tolerancia según tipo de concreto",
    ],
  },
  {
    id: 2,
    thumb: "/assets/imgs/resources/service-tab-1.jpg",
    title: "Muestreo de Concreto Fresco",
    desc: "Procedimiento para recolectar una muestra representativa desde camión, bote o canaleta.",
    list: [
      "Técnicas para obra y planta",
      "Tiempo límite de recolección",
      "Etiquetado y traslado correcto",
    ],
  },
  {
    id: 3,
    thumb: "/assets/imgs/resources/service-tab-1.jpg",
    title: "Prueba de Revenimiento (Slump Test)",
    desc: "Método más utilizado para determinar la consistencia del concreto fresco.",
    list: [
      "Uso del cono de Abrams",
      "Altura y forma como indicadores",
      "Identificación de mezclas",
    ],
  },
  {
    id: 4,
    thumb: "/assets/imgs/resources/service-tab-1.jpg",
    title: "Peso Unitario y Contenido de Aire (Gravimétrico)",
    desc: "Evalúa la densidad y aire atrapado en la mezcla por medio de pesaje.",
    list: [
      "Protocolo para medición precisa",
      "Cálculo de volumen producido",
      "Determinación indirecta de aire incluido",
    ],
  },
  {
    id: 5,
    thumb: "/assets/imgs/resources/service-tab-1.jpg",
    title: "Contenido de Aire (Método de Presión)",
    desc: "Verifica el volumen de aire presente en concreto fresco mediante presión.",
    list: [
      "Requiere medidor tipo A o B",
      "Tolerancia para estructuras críticas",
      "Relación con durabilidad y congelamiento",
    ],
  },
  {
    id: 6,
    thumb: "/assets/imgs/resources/service-tab-1.jpg",
    title: "Contenido de Aire (Método Volumétrico)",
    desc: "Alternativa al método de presión, especialmente para mezclas con agregados livianos.",
    list: [
      "Uso de solución de alcohol isopropílico",
      "Acondicionamiento y agitación controlada",
      "Medición en porcentaje volumétrico",
    ],
  },
  {
    id: 7,
    thumb: "/assets/imgs/resources/service-tab-1.jpg",
    title: "Elaboración y Curado de Especímenes",
    desc: "Estándar para moldear y almacenar cilindros de prueba antes de su ensayo de compresión.",
    list: [
      "Preparación de moldes y etiquetado",
      "Condiciones de curado inicial en obra",
      "Registro de ubicación, fecha y lote",
    ],
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
    <section
      className={`service-tab-section section-space bg-color-1 p-relative ${
        style ? "is-dark" : ""
      }`}
    >
      <div className="small-container">
        <div
          className="service-tab-title-area mb-70"
          style={{ marginTop: "60px" }}
        >
          <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
            <span className="section-sub-title">PRUEBAS DE CONCRETO</span>
            <h3 className="section-title mt-10 text-white p-relative">
              Normas ASTM aplicadas en obra con certificación ACI
            </h3>
            <p className="pt-15 pb-10" style={{ color: "#fff" }}>
              Domina los ensayos clave del concreto fresco en campo con base en
              los estándares ASTM. Estas pruebas son requeridas por
              certificaciones ACI e indispensables para garantizar la calidad
              del concreto en obra.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div
              className="service-tab-btn-area wow fadeInLeft"
              data-wow-delay="500ms"
            >
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tab_title.map((tab, index) => (
                  <li key={index} className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === index ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(index)}
                      id="modified-roofing-tab"
                      style={{ cursor: "pointer" }}
                    >
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
                  <div
                    key={item.id}
                    className={`tab-pane fade ${
                      activeTab === index ? "show active" : ""
                    }`}
                    id="modified-roofing-tab-pane"
                  >
                    <div className="service-tab-content p-relative">
                      {!style && (
                        <div
                          className="tab-bg-shape"
                          style={{
                            backgroundImage: `url(/assets/imgs/shapes/shape-32.png)`,
                          }}
                        ></div>
                      )}
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
  );
};

export default Service;
