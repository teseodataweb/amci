import { Link } from "react-router-dom";
import React from "react";

interface DataType {
  sub_title: string;
  title: string;
  feature_list: {
    id: number;
    icon: string;
    title: string;
    desc: string;
  }[];
}

const choose_data: DataType = {
  sub_title: "Red de Convenios",
  title: "Hoteles aliados para concretar con comodidad",
  feature_list: [
    {
      id: 1,
      icon: "fas fa-hotel", // Hotel Camino Real
      title: "Hotel Camino Real",
      desc: "Convenio con tarifa preferencial en habitaciones estándar y ejecutivas en múltiples ciudades.",
    },
    {
      id: 2,
      icon: "fas fa-briefcase", // Fiesta Inn Business Class
      title: "Fiesta Inn Business Class",
      desc: "Descuento exclusivo para concreteros afiliados en viajes de trabajo. Incluye desayuno y wifi.",
    },
    {
      id: 3,
      icon: "fas fa-city", // City Express Plus
      title: "City Express Plus",
      desc: "Tarifas especiales y facturación flexible para concreteras registradas en eventos AMCI.",
    },
    {
      id: 4,
      icon: "fas fa-star", // Marriott Reforma CDMX
      title: "Marriott Reforma CDMX",
      desc: "Hospedaje premium con beneficios para afiliados durante ferias o encuentros del sector.",
    },
    {
      id: 5,
      icon: "fas fa-map-marker-alt", // Hotel Holiday Inn Express
      title: "Hotel Holiday Inn Express",
      desc: "Tarifas corporativas negociadas y ubicación clave en corredores industriales.",
    },
    {
      id: 6,
      icon: "fas fa-tags", // NH Collection Guadalajara
      title: "NH Collection Guadalajara",
      desc: "Precio reducido por convenio para participantes de Constructo y otras ferias técnicas.",
    },
  ],
};

const { sub_title, title, feature_list } = choose_data;

const Choose = () => {
  return (
    <section className="choose-section bg-color-1 section-space-top p-relative">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(/assets/imgs/bg/choose-bg.png)` }}
      ></div>
      <div
        className="shape-image"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-15.png)` }}
      ></div>
      <div className="small-container">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 p-relative section-space-medium-bottom">
            <div
              className="title-box mb-50 wow fadeInLeft"
              data-wow-delay=".5s"
            >
              <span className="section-sub-title">{sub_title}</span>
              <h3 className="section-title mt-10">{title}</h3>
            </div>
            {feature_list.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  className="choose-area-icon-box mb-15 wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="icon-box p-relative">
                    <i className={item.icon}></i>
                  </div>
                  <div className="content">
                    <h5>
                      <Link to="/services">{item.title}</Link>
                    </h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
          <div
            className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft"
            data-wow-delay="1.2s"
          >
            <figure className="image m-img">
              <img src="/assets/imgs/resources/choose-1.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
