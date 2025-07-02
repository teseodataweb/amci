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
  sub_title: "City Express | Convenio nacional",
  title:
    "Hospédate con beneficios exclusivos para socios AMCI en más de 150 destinos.",
  feature_list: [
    {
      id: 1,
      icon: "fas fa-key",
      title: "Socios activos",
      desc: "Convenio disponible únicamente para miembros vigentes de AMCI.",
    },
    {
      id: 2,
      icon: "fas fa-city",
      title: "Cobertura nacional",
      desc: "Aplica en más de 150 hoteles de la cadena City Express en ciudades clave e industriales.",
    },
    {
      id: 3,
      icon: "fas fa-calendar-alt",
      title: "Registro semestral",
      desc: "El número de convenio se actualiza cada 6 meses y es indispensable para reservar.",
    },
    {
      id: 4,
      icon: "fas fa-file-invoice",
      title: "Facturación preferente",
      desc: "Accede a tarifas corporativas con facturación simplificada para viajes de trabajo o eventos.",
    },
    {
      id: 5,
      icon: "fas fa-phone",
      title: "Solicita por teléfono",
      desc: "Marca al (81) 8399 0066 para obtener el número de convenio y detalles del alta.",
    },
    {
      id: 6,
      icon: "fas fa-envelope",
      title: "Solicita por correo",
      desc: "También puedes escribir a: info@amciac.org para tramitar tu acceso.",
    },
  ],
};

const { sub_title, title, feature_list } = choose_data;

const Choose = () => {
  return (
    <section className="choose-section bg-color-1 section-space-top p-relative">
      <div className="top-padding"></div>
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
                      {item.icon === "fas fa-phone" ? (
                        <a
                          href="https://wa.me/528183990066"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                      ) : item.icon === "fas fa-envelope" ? (
                        <a href="https://mail.google.com/mail/?view=cm&to=info@amciac.org" target="_blank">{item.title}</a>
                      ) : (
                        item.title
                      )}
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
