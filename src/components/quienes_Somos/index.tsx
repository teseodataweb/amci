import AboutHome from "../homes/home-three/About";
import BreadCrumb from "../common/BreadCrumb";
import Choose from "../homes/home-three/Choose";
import Process from "./Process";
import FaqArea from "./FaqArea"
import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterThree from "../../layouts/footers/FooterThree";

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Quienes somos" title="Quienes Somos" />
        <AboutHome />
        <Choose />
        <Process style={false} />
        <FaqArea />
      </main>
      <FooterThree />
    </>
  );
};

export default About;
