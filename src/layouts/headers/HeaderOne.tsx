import NavMenu from "./Menu/NavMenu";
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";

const HeaderOne = () => {
  const { sticky } = UseSticky();
  const [offCanvas, setOffCanvas] = useState<boolean>(false);

  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header-area header-style-two ${sticky ? "sticky" : ""}`}
        >
          <div className="large-container padding-top">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src="/assets/imgs/logo/logo.webp"
                        alt="header logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                  <div className="header-action d-none d-xl-inline-flex gap-5 ml-40 show-button">
                    <div className="header-link">
                      <Link className="primary-btn-1 btn-hover" to="/contacto">
                        Contacto &nbsp; <i className="icon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="header-action ml-30 hide-on-mobile">
                    <div className="header-link-1 d-flex align-items-center">
                      <div className="icon">
                        <i className="fal fa-phone-volume"></i>
                      </div>
                      <div className="content">
                        <span>Call Us Now</span>
                        <h6>
                          <Link to="tel:2085550112">+208-555-0112</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div className="sidebar__toggle">
                      <a
                        className="bar-icon"
                        onClick={() => setOffCanvas(true)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa-light fa-bars-sort"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas
        style={false}
        offCanvas={offCanvas}
        setOffCanvas={setOffCanvas}
      />
    </>
  );
};

export default HeaderOne;
