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
    icon: "icon-hammer",
    title: "Concreteros, no competencia",
    desc: "Nos une la colaboración entre concreteros independientes. Aquí, cada socio aporta y todos crecemos.",
  },
  {
    id: 2,
    icon: "icon-roof-5",
    title: "Alianzas con impacto real",
    desc: "Accede a convenios exclusivos con proveedores, cementeras, laboratorios y certificadoras del sector.",
  },
  {
    id: 3,
    icon: "icon-roof-6",
    title: "Acompañamiento nacional",
    desc: "Recibe soporte directo en temas técnicos, normativos, gremiales y de negocio sin importar dónde estás.",
  },
  {
    id: 4,
    icon: "icon-roof-7",
    title: "Formación para tu equipo",
    desc: "Capacitamos a tus operadores, supervisores y mandos con certificaciones y talleres actualizados.",
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
        <h2 className="section-title mb-40 text-white">
          Lo que distingue a AMCI
        </h2>
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
