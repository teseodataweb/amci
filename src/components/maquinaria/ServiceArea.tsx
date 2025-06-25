import { Link } from "react-router-dom";
import service_data from "../../data/ServiceData";

const ServiceArea = () => {
  return (
    <section className="service-page-section section-space">
      <div className="small-container">
        {/* Superior, título y descripción */}
        <div className="row">
          <div className="col-12 text-center mb-40">
            <span className="section-sub-title">Equipos y Maquinaria</span>
            <h2 className="section-title mt-10">
              Herramientas que fortalecen tu operación
            </h2>
            <p className="mb-35">
              Conoce el catálogo de maquinaria, aditamentos y unidades
              disponibles para concreteros independientes. Cada equipo está
              alineado a los estándares técnicos de la industria y disponible
              para su adquisición o uso bajo convenio.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {service_data
            .filter((items) => items.page === "maquinaria")
            .map((item) => (
              <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
                <div className="service-slider-area p-relative">
                  <figure className="image w-img">
                    <img src={item.thumb} alt="" />
                  </figure>
                  <div className="content">
                    <div className="icon-box">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="mb-15">
                      <Link to="service-details">
                        <span
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      </Link>
                    </h4>
                    <p className="mb-25">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
