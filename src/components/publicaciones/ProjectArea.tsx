import project_data from "../../data/ProjectData";

const ProjectArea = () => {
  return (
    <section className="project-page-section section-space p-relative fix">
      <div className="small-container">
        {/* Superior, título y párrafo */}
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">PUBLICACIONES AMCI</span>
            <h2 className="section-title mt-10">
              Contenido técnico y estratégico para concreteras independientes
            </h2>
            <p className="mb-35">
              Consulta nuestras publicaciones oficiales enfocadas en la industria del concreto. Aquí encontrarás boletines, documentos técnicos, comunicados y materiales especializados que fortalecen el conocimiento y la toma de decisiones dentro de tu concretera. Todos los contenidos son elaborados o validados por AMCI y sus aliados estratégicos.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {project_data
            .filter((item) => item.page === "index")
            .map((item) => (
              <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
                <div className="project-slider-area p-relative">
                  <figure className="image m-img">
                    <img src={item.thumb2 ? item.thumb2 : item.thumb} alt="" />
                  </figure>
                  <div className="content-area">
                    <div className="title-area">
                      <h6 className="mb-5">{item.sub_title}</h6>
                      <h5>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <a href="#">{item.title}</a>
                        )}
                      </h5>
                    </div>
                    <div className="icon-area">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="icon-arrow-up"></i>
                        </a>
                      ) : (
                        <a href="#">
                          <i className="icon-arrow-up"></i>
                        </a>
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