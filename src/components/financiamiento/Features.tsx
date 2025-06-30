import { Link } from "react-router-dom";

interface DataType {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: "fa-solid fa-credit-card", // 💳
    title: "Servicios de Crédito AMCI",
    desc: "Accede a apoyos internos para socios con historial activo. Incluye reportes crediticios, referencias y herramientas de análisis financiero.",
  },
  {
    id: 2,
    icon: "fa-solid fa-file-invoice", // 🧾
    title: "Documento Garantía de Crédito",
    desc: "Solicita el formato oficial que respalda operaciones de crédito entre concreteras. Avalado por AMCI para mayor seguridad jurídica.",
  },
  {
    id: 3,
    icon: "fa-solid fa-truck-moving", // 🚛
    title: "Convenio con TIP México",
    desc: "Arrendamiento y administración de flotas para camiones, tractos y automóviles. Condiciones preferenciales para socios AMCI.",
  },
  {
    id: 4,
    icon: "fa-solid fa-chart-line", // 📈
    title: "Reportes al Buró de Crédito",
    desc: "Próximamente podrás consultar y reportar operaciones desde la plataforma AMCI. Transparencia y protección para concreteras independientes.",
  },
];

interface PropType {
  style: boolean;
}

const Features = ({ style }: PropType) => {
  return (
    <section
      className={`features-section pt-80 pb-80 bg-color-1 p-relative ${
        style ? "is-dark" : ""
      }`}
    >
      <div
        className="bg-shape-1"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-27.png)` }}
      ></div>
      <div
        className="bg-shape-2"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-28.png)` }}
      ></div>
      <div className="small-container">
        <div className="row g-4">
          {feature_data.map((item) => (
            <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div
                className={`features-box-area p-relative wow fadeInLeft ${
                  style ? "bg-color-3" : ""
                }`}
                data-wow-delay="500ms"
              >
                <div
                  className="shape-1"
                  style={{
                    backgroundImage: `url(/assets/imgs/shapes/shape-24.png)`,
                  }}
                ></div>
                <div
                  className="shape-2"
                  style={{
                    backgroundImage: `url(/assets/imgs/shapes/shape-25.png)`,
                  }}
                ></div>
                <div
                  className="shape-3"
                  style={{
                    backgroundImage: `url(/assets/imgs/shapes/shape-26.png)`,
                  }}
                ></div>
                <div className="icon-box">
                  <i className={item.icon}></i>
                </div>
                <h5 className="mt-20 mb-10">
                  <Link to="/services">{item.title}</Link>
                </h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
