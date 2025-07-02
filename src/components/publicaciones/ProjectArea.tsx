import project_data from "../../data/ProjectData";

const ProjectArea = () => {
  return (
    <section className="project-page-section section-space p-relative fix">
      <div className="small-container">
        {/* Superior, título y párrafo */}
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">Certificaciones AMCI</span>
            <h2 className="section-title mt-10">
              Eleva tus estándares, valida tu excelencia
            </h2>
            <p className="mb-35">
              Certifica tu planta, tus procesos y tu maquinaria con el respaldo técnico de AMCI. Fortalece tu operación y accede a nuevas oportunidades validando tu calidad de forma profesional.
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