import { useState } from "react";
import { Link } from "react-router-dom";
import team_data from "../../data/TeamData";

const categories = [
  { label: "Todos", value: 0 },
  { label: "CONSEJO DIRECTIVO", value: 1 },
  { label: "VICEPRESIDENCIAS", value: 2 },
  { label: "COMISIONES", value: 3 },
  { label: "CONSEJO CONSULTIVO", value: 4 },
];

const TeamArea = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const filtered = team_data.filter(
    (item) =>
      item.page === "mesa_Directiva" &&
      (selectedCategory === 0 ||
        (item.categories && item.categories.includes(selectedCategory)))
  );

  // Verifica si Josué Zaragoza Santos está en el filtro actual
  const josueIndex = filtered.findIndex(
    (item) => item.name === "Josué Zaragoza Santos"
  );
  const showJosueSolo =
    josueIndex !== -1 && (selectedCategory === 0 || selectedCategory === 1);

  // Función para renderizar los botones sociales solo si existen
  const renderSocialLinks = (item: any) => {
  // Obtén las redes sociales presentes
  const icons = [
    item.facebook && (
      <li key="facebook">
        <a href={item.facebook} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
    ),
    item.linkedin && (
      <li key="linkedin">
        <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
    ),
    item.instagram && (
      <li key="instagram">
        <a href={item.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    ),
  ].filter(Boolean);

  if (icons.length === 0) return null;

  // Crea un arreglo de 3 posiciones, rellenando con vacíos al inicio
  const emptyCount = 3 - icons.length;
  const emptyLis = Array.from({ length: emptyCount }, (_, i) => (
    <li key={`empty-${i}`} style={{ visibility: "hidden" }}>
      <span />
    </li>
  ));
  const finalIcons = [...emptyLis, ...icons];

  return (
    <div className="social-links p-relative">
      <span>
        <i className="icon-share"></i>
      </span>
      <ul>{finalIcons}</ul>
    </div>
  );
};

  return (
    <section className="team-section p-relative section-space">
      <div className="small-container">
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">Liderazgo AMCI</span>
            <h2 className="section-title mt-10">
              Comprometidos con el futuro del concreto
            </h2>
            <p className="mb-35">
              Nuestra mesa directiva está conformada por profesionales del concreto que representan a empresas independientes en todo el país. Su visión, experiencia y compromiso impulsan las decisiones estratégicas que fortalecen al gremio, promueven la innovación técnica y garantizan el crecimiento sostenible del sector.
            </p>
          </div>
        </div>
        {/* Botones de filtro */}
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`team-filter-btn${
                selectedCategory === cat.value ? " active" : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Mostrar a Josué solo en la primera fila solo si corresponde */}
        {showJosueSolo ? (
          <>
            <div className="row g-4">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-15 offset-xxl-4 offset-xl-4 offset-lg-4">
                <div
                  className="team-area-box p-relative mb-60 wow fadeInLeft"
                  data-wow-delay=".7s"
                >
                  <figure className="image w-img p-relative">
                    <img src={filtered[josueIndex].thumb} alt="" />
                  </figure>
                  <div className="content">
                    <div className="author-info">
                      <h5 className="mb-5">
                        <Link to={filtered[josueIndex].link ?? "#"}>
                          {filtered[josueIndex].name}
                        </Link>
                      </h5>
                      <span>{filtered[josueIndex].designation}</span>
                    </div>
                    {renderSocialLinks(filtered[josueIndex])}
                  </div>
                </div>
              </div>
            </div>
            {/* Segunda fila: los demás elementos excepto Josué */}
            <div className="row g-4">
              {filtered
                .filter((_, idx) => idx !== josueIndex)
                .map((item) => (
                  <div
                    key={item.id}
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-15"
                  >
                    <div
                      className="team-area-box p-relative mb-60 wow fadeInLeft"
                      data-wow-delay=".7s"
                    >
                      <figure className="image w-img p-relative">
                        <img src={item.thumb} alt="" />
                      </figure>
                      <div className="content">
                        <div className="author-info">
                          <h5 className="mb-5">
                            <Link to={item.link ?? "#"}>{item.name}</Link>
                          </h5>
                          <span>{item.designation}</span>
                        </div>
                        {renderSocialLinks(item)}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        ) : (
          // Si Josué no está, todos los miembros se muestran normalmente
          <div className="row g-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-15"
              >
                <div
                  className="team-area-box p-relative mb-60 wow fadeInLeft"
                  data-wow-delay=".7s"
                >
                  <figure className="image w-img p-relative">
                    <img src={item.thumb} alt="" />
                  </figure>
                  <div className="content">
                    <div className="author-info">
                      <h5 className="mb-5">
                        <Link to={item.link ?? "#"}>{item.name}</Link>
                      </h5>
                      <span>{item.designation}</span>
                    </div>
                    {renderSocialLinks(item)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamArea;