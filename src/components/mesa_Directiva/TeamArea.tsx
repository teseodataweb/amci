import { Link } from "react-router-dom"
import team_data from "../../data/TeamData"

const TeamArea = () => {
   const filtered = team_data.filter((items) => items.page === "mesa_Directiva");

   return (
      <section className="team-section p-relative section-space">
         <div className="small-container">
            {/* Primera fila: solo el primer elemento centrado */}
            <div className="row g-4">
               {filtered[0] && (
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-15 offset-xxl-4 offset-xl-4 offset-lg-4">
                     <div className="team-area-box p-relative mb-60 wow fadeInLeft" data-wow-delay=".7s">
                        <figure className="image w-img p-relative">
                           <img src={filtered[0].thumb} alt="" />
                        </figure>
                        <div className="content">
                           <div className="author-info">
                              <h5 className="mb-5">
                                 <Link to={filtered[0].link ?? "/team-details"}>
                                    {filtered[0].name}
                                 </Link>
                              </h5>
                              <span>{filtered[0].designation}</span>
                           </div>
                           <div className="social-links p-relative">
                              <span><i className="icon-share"></i></span>
                              <ul>
                                 <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                 <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                 <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
            {/* Segunda fila: los demás elementos */}
            <div className="row g-4">
               {filtered.slice(1).map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-15">
                     <div className="team-area-box p-relative mb-60 wow fadeInLeft" data-wow-delay=".7s">
                        <figure className="image w-img p-relative">
                           <img src={item.thumb} alt="" />
                        </figure>
                        <div className="content">
                           <div className="author-info">
                              <h5 className="mb-5">
                                 <Link to={item.link ?? "/team-details"}>
                                    {item.name}
                                 </Link>
                              </h5>
                              <span>{item.designation}</span>
                           </div>
                           <div className="social-links p-relative">
                              <span><i className="icon-share"></i></span>
                              <ul>
                                 <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                 <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                 <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default TeamArea