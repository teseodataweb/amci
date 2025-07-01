import { Link } from "react-router-dom";
import { JSX } from "react";

interface ContactDataType {
  id: number;
  icon: string;
  title: string;
  info: JSX.Element;
}

const contact_data: ContactDataType[] = [
  {
    id: 1,
    icon: "fa-light fa-location-dot",
    title: "Ubicación:",
    info: (
      <>
        <p className="m-0">4517 Washington. mg Manchester, Kentucky 39495</p>
      </>
    ),
  },
  {
    id: 2,
    icon: "fa-light fa-phone-alt",
    title: "Teléfono:",
    info: (
      <>
        <a href="tel:20866660112">208-6666-0112</a>,{" "}
        <a href="tel:30855550113">308-5555-0113</a>
      </>
    ),
  },
  {
    id: 3,
    icon: "fa-light fa-clock",
    title: "Horario:",
    info: (
      <>
        <p className="m-0">Lun - Sáb: 10:00 AM - 4:00 PM</p>
      </>
    ),
  },
];

const latest_post_data = [
  {
    id: 1,
    thumb: "/assets/imgs/blog/blog-s-1.jpg",
    title: (
      <>
        Así se construyó
        <br />
        el Primer Informe...
      </>
    ),
    date: "30 May 2025",
  },
];

const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="footer-main bg-color-1">
          <div className="footer-top section-space-medium">
            <div className="small-container">
              <div className="row g-4">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-1">
                    <figure className="image">
                      <img src="/assets/imgs/logo/logo.webp" alt="" />
                    </figure>
                    <p className="mt-40 mb-40">
                      Promovemos el desarrollo técnico, normativo y comercial de
                      las concreteras independientes en México.
                    </p>
                    <div className="footer-socials">
                      <span>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </span>
                      <span>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </span>
                      <span>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </span>
                      <span>
                        <Link to="#">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-2 pl-50">
                    <h4 className="mb-20 footer-title">Navegación</h4>
                    <ul className="service-list">
                      <li>
                        <Link to="/">Inicio</Link>
                      </li>
                      <li>
                        <Link to="/quienes_Somos">AMCI</Link>
                      </li>
                      <li>
                        <Link to="/proveedores">Miembros</Link>
                      </li>
                      <li>
                        <Link to="/convenios">Convenios</Link>
                      </li>
                      <li>
                        <Link to="/mnx">Capacitación</Link>
                      </li>
                      <li>
                        <Link to="https://amciac.org/blog/">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contacto">Contacto</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-3">
                    <h4 className="mb-20 footer-title">Últimos artículos</h4>
                    <ul className="blog-list">
                      {latest_post_data.map((item) => (
                        <li key={item.id}>
                          <div className="footer-blog-post-box mb-15">
                            <figure className="thumb">
                              <img src={item.thumb} alt="" />
                            </figure>
                            <div className="content">
                              <span className="date">
                                <Link to="https://amciac.org/blog/?p=9">
                                  {item.date}
                                </Link>
                              </span>
                              <h6>
                                <Link to="https://amciac.org/blog/?p=9">
                                  {item.title}
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-4 pr-30">
                    <h4 className="mb-20 footer-title">Contacto</h4>
                    <ul className="footer-contact-info-widget p-relative">
                      {contact_data.map((item) => (
                        <li key={item.id}>
                          <div className="icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="info-details">
                            <h6 className="mb-10">{item.title}</h6>
                            {item.info}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-container">
            <div className="footer-bottom pt-30 pb-30">
              ...
              <div className="left-area">
                <span>
                  © Todos los derechos reservados {new Date().getFullYear()} por{" "}
                  <Link to="/">AMCI</Link>
                </span>
              </div>
              ...
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
