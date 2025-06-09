import { Link } from "react-router-dom"
import service_data from "../../../data/ServiceData"

const ServiceArea = () => {
   return (
      <section className="service-page-section section-space">
         <div className="small-container">
            <div className="row g-4">
               {service_data.filter((items) => items.page === "inner_page").map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
                     <div className="service-slider-area p-relative">
                        <figure className="image w-img">
                           <img src={item.thumb} alt="" />
                        </figure>
                        <div className="content">
                           <div className="icon-box">
                              <i className={item.icon}></i>
                           </div>
                           <h4 className="mb-15"><Link to="service-details">{item.title}</Link></h4>
                           <p className="mb-25">{item.desc}</p>
                           <Link to="service-details" className="service-btn">Read More <i className="icon-arrow-right-double"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default ServiceArea
