import { Link } from "react-router-dom";
import project_data from "../../data/ProjectData";

const ProjectArea = () => {
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
              Conoce a las concreteras independientes que forman parte activa de AMCI. Unidos por la calidad, la innovación y la defensa del gremio.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {project_data
            .filter((items) => items.page === "socios")
            .map((item) => (
              <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
                <div className="project-slider-area p-relative">
                  <figure className="image m-img">
                    <img src={item.thumb} alt="" />
                  </figure>
                  <div className="content-area">
                    <div className="title-area">
                      <h6 className="mb-5">{item.sub_title}</h6>
                      <h5>
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
                      </h5>
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
