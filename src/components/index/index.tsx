import Banner from "./Banner"
import Features from "./Features"
import About from "./About"
import Service from "./Service"
import Process from "./Process"
import TextSlider from "./TextSlider"
import Project from "./Project"
import Testimonial from "./Testimonial"
import Counter from "./Counter"
import HeaderOne from "../../layouts/headers/HeaderOne"
import FooterThree from "../../layouts/footers/FooterThree"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Banner />
        <Features style={true} />
        <About style={false} />
        <Service style={false} />
        <Process style={false} />
        <TextSlider style={false}/>
        <Project style={false} />
        <Testimonial />
        <Counter style={false} />
      </main>
      <FooterThree />
    </>
  )
}

export default HomeOne
