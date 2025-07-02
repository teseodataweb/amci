import { useState } from "react";
import { Link } from "react-router-dom";
import project_data from "../../data/ProjectData";

const categorias = [
  { num: 2, nombre: "Software" },
  { num: 3, nombre: "Materiales" },
  { num: 4, nombre: "Captura de carbono" },
  { num: 5, nombre: "Refacciones" },
  { num: 6, nombre: "Equipos" },
  { num: 7, nombre: "Maquinaria" },
  { num: 8, nombre: "Fibras" },
];

const ProjectArea = () => {
  const [filtro, setFiltro] = useState(0); // 0 = Todos
  const [open, setOpen] = useState(false);

  const proveedores = project_data.filter((item) => item.page === "proveedores");
  const proveedoresFiltrados =
    filtro === 0
      ? proveedores
      : proveedores.filter((item) => item.categoria?.includes(filtro));

  return (
    <section className="project-page-section section-space p-relative fix">
      <div className="small-container">
        {/* Superior, título y párrafo */}
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">Proveedores Aliados</span>
            <h2 className="section-title mt-10">
              Soluciones que fortalecen al concreto independiente
            </h2>
            <p className="mb-35">
              Conoce a las marcas que impulsan el crecimiento del sector concretero con productos, servicios y tecnología especializada. Nuestros proveedores aliados son parte estratégica del ecosistema AMCI, aportando innovación, soporte técnico y propuestas de valor a concreteras en todo el país.
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
                  Categorías <span style={{ marginLeft: 8 }}>▼</span>
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
            {/* Categoría seleccionada */}
            {filtro !== 0 && (
              <div style={{ marginTop: 24 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#222" }}>
                  {categorias.find((c) => c.num === filtro)?.nombre}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Cards */}
        <div className="row g-4" style={{ marginTop: 32 }}>
          {proveedoresFiltrados.map((item) => (
            <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={item.thumb} alt="" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">{item.sub_title}</h6>
                    <h5>
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