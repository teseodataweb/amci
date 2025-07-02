import { useState } from "react";
import { Link } from "react-router-dom";
import project_data from "../../data/ProjectData";

const categorias = [
  {
    num: 1,
    nombre: "Noroeste",
    estados: ["Sonora", "Sinaloa", "Baja California"],
  },
  {
    num: 2,
    nombre: "Noreste",
    estados: ["Nuevo León", "Coahuila", "Tamaulipas"],
  },
  {
    num: 3,
    nombre: "Occidente",
    estados: ["Jalisco", "Nayarit", "Colima", "Michoacán"],
  },
  {
    num: 4,
    nombre: "Bajío",
    estados: ["Aguascalientes", "Guanajuato", "Querétaro", "San Luis Potosí"],
  },
  {
    num: 5,
    nombre: "Centro",
    estados: ["CDMX", "Estado de México", "Morelos", "Puebla", "Hidalgo"],
  },
  {
    num: 6,
    nombre: "Sureste",
    estados: [
      "Veracruz",
      "Tabasco",
      "Quintana Roo",
      "Campeche",
      "Chiapas",
      "Yucatán",
    ],
  },
  { num: 7, nombre: "Norte", estados: ["Chihuahua", "Durango", "Zacatecas"] },
  { num: 8, nombre: "Golfo", estados: ["Veracruz", "Tabasco", "Tamaulipas"] },
];

const ProjectArea = () => {
  const [filtro, setFiltro] = useState(0); // 0 = Todos
  const [open, setOpen] = useState(false);

  const socios = project_data.filter((item) => item.page === "socios");
  const sociosFiltrados =
    filtro === 0
      ? socios
      : socios.filter((item) => item.categoria?.includes(filtro));

  const estadosFiltro = categorias.find((c) => c.num === filtro)?.estados || [];

  return (
    <section className="project-page-section section-space p-relative fix">
      <div className="small-container">
        {/* Superior, título y párrafo */}
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">Red de Socios</span>
            <h2 className="section-title mt-10">
              Concreteros que construyen el futuro juntos
            </h2>
            <p className="mb-35">
              Conoce a las concreteras independientes que forman parte activa de
              AMCI. Desde el norte hasta el sureste del país, nuestra red de
              socios fortalece la industria con experiencia, compromiso y altos
              estándares técnicos. Unidos, representamos la voz del concreto en
              México.
            </p>
          </div>
        </div>
        {/* Botones de filtro */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 24,
                marginBottom: 32,
              }}
            >
              <button
                className={`team-filter-btn${filtro === 0 ? " active" : ""}`}
                onClick={() => {
                  setFiltro(0);
                  setOpen(false);
                }}
              >
                Todos
              </button>
              <div style={{ position: "relative" }}>
                <button
                  className={`team-filter-btn${filtro !== 0 ? " active" : ""}`}
                  onClick={() => setOpen((v) => !v)}
                >
                  Divisiones <span style={{ marginLeft: 8 }}>▼</span>
                </button>
                {open && (
                  <div className="divisiones-dropdown">
                    {categorias.map((cat) => (
                      <button
                        key={cat.num}
                        className={`team-filter-btn${
                          filtro === cat.num ? " active" : ""
                        }`}
                        onClick={() => {
                          setFiltro(cat.num);
                          setOpen(false);
                        }}
                      >
                        {cat.nombre}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* División seleccionada y estados */}
            {filtro !== 0 && (
              <div style={{ marginTop: 24 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#222" }}>
                  {categorias.find((c) => c.num === filtro)?.nombre}
                </div>
                <div style={{ fontSize: 20, color: "#888", marginTop: 4 }}>
                  {estadosFiltro.join(", ")}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Cards */}
        <div className="row g-4" style={{ marginTop: 32 }}>
          {sociosFiltrados.map((item) => (
            <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={item.thumb} alt="" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">{item.sub_title}</h6>
                    <h5>
                      {/* Link solo visible en desktop/tablet */}
                      <span className="socio-title-link">
                        {item.link && item.link.startsWith("http") ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <Link to={item.link ?? "/project-details"}>
                            {item.title}
                          </Link>
                        )}
                      </span>
                      {/* Texto plano solo visible en móvil */}
                      <span className="socio-title-plain">{item.title}</span>
                    </h5>
                    {item.direccion && (
                      <div className="socio-direccion">
                        <span style={{ fontWeight: "bold" }}>⚲</span>{" "}
                        {item.direccion}
                      </div>
                    )}
                  </div>
                  <div className="icon-area">
                    {item.link && item.link.startsWith("http") ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-arrow-up"></i>
                      </a>
                    ) : (
                      <Link to={item.link ?? "/project-details"}>
                        <i className="icon-arrow-up"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectArea;
