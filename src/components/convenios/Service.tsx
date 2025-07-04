import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import service_data from "../../data/ServiceData";

// Función para hacer URLs y correos clickeables
function linkify(text: string) {
  const urlRegex =
    /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  return text.split(urlRegex).map((part: string, i: number) => {
    if (!part) return null;
    if (/^https?:\/\//.test(part) || /^www\./.test(part)) {
      const url = /^https?:\/\//.test(part) ? part : `https://${part}`;
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#e51b23" }}
        >
          {part}
        </a>
      );
    }
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${part}`;
      return (
        <a key={i} href={gmailUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#e51b23" }}>
          {part}
        </a>
      );
    }
    return part;
  });
}

const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: false,
  navigation: {
    prevEl: ".service-1-button-prev",
    nextEl: ".service-1-button-next",
  },
  breakpoints: {
    "1400": { slidesPerView: 3 },
    "1200": { slidesPerView: 3 },
    "992": { slidesPerView: 2 },
    "768": { slidesPerView: 1 },
    "576": { slidesPerView: 1 },
    "0": { slidesPerView: 1 },
  },
};

const Service = () => {
  return (
    <section className="service-slider-section section-space bg-color-1 p-relative">
      <div
        className="shape-1 float-bob-y"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-10.png)` }}
      ></div>
      <div
        className="shape-2 float-bob-y"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-9.png)` }}
      ></div>
      <div
        className="shape-3"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-11.png)` }}
      ></div>
      <div className="small-container">
        {/* Título y navegación de convenios */}
        <div className="row">
          <div className="col-xxl-6">
            <div
              className="title-box mb-50 wow fadeInLeft"
              data-wow-delay=".5s"
            >
              <span className="section-sub-title">Convenios activos</span>
              <h3 className="section-title mt-10">
                Oportunidades exclusivas para asociados
              </h3>
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="service_1_navigation__wrapprer position-relative z-1 text-end mt-30">
              <div className="common-slider-navigation">
                <button className="service-1-button-prev">
                  <i className="icon-arrow-left-angle"></i>
                </button>
                <button className="service-1-button-next">
                  <i className="icon-arrow-right-angle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Carrusel de convenios */}
        <Swiper
          {...setting}
          modules={[Autoplay, Navigation]}
          className="swiper service-active-1"
        >
          {service_data
            .filter((items) => items.page === "convenios")
            .map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="service-slider-area service-card-equal">
                  <figure className="image w-img">
                    <img src={item.thumb} alt="" />
                    <div className="icon-box">
                      <i className={item.icon}></i>
                    </div>
                  </figure>
                  <div className="content">
                    <h4 className="mb-15">
                      <Link to="/service-details">{item.title}</Link>
                    </h4>
                    <p className="mb-25">{linkify(item.desc)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Service;