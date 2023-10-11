import React,{useState,useEffect} from 'react'
import test1 from '../../assets/images/auther-img.png'
import data from '../../data.json'


export default function Testimonial() {

   const [jsonData, setJsonData] = useState([{}]);
   const [funFactsData, setFunFactsData] = useState([]);


   useEffect(() => {
      setJsonData(data);
      setFunFactsData(data.funFacts);
      // console.log(data)

   }, []);

  return (
    <div>
        <section>
         <div className="w-100 float-left slider-con text-lg-left text-center">
               <div className="slider-inner-con banner-overlay-img">
            <div className="container">
                  <div className="row overlay-img">
                     <div className="col-lg-4 d-flex align-items-center">
                        <div className="slider-left-con">
                           <h2 className="text-white mr-md-5 pr-md-5">{jsonData.testimonialPage?.testimonialsectionOne?.title}
                               
                           </h2>
                           <p className="mb-0 mr-md-5 pr-md-5">{jsonData.testimonialPage?.testimonialsectionOne?.description}
                           </p>
                        </div>
                     </div>
                     <div className="col-lg-8">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                           <div className="carousel-inner">
                              <div className="carousel-item">
                                 <div className="auther-con w-100 d-inline-block">
                                    <figure className="mb-0 d-inline-block">
                                       <img src={test1} alt="auther-img" className="img-fluid" />
                                    </figure>
                                    <div className="auther-title d-inline-block">
                                       <h4 className="text-white">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserOne?.Name}</h4>
                                       <p className="mb-0">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserOne?.Patient}</p>
                                    </div>
                                 </div>
                                 <p className="text-white mb-0">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserOne?.description}</p>
                              </div>
                              <div className="carousel-item active carousel-item-left">
                                 <div className="auther-con w-100 d-inline-block">
                                    <figure className="mb-0 d-inline-block">
                                       <img src={test1} alt="auther-img" className="img-fluid" />
                                    </figure>
                                    <div className="auther-title d-inline-block">
                                       <h4 className="text-white">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserTwo?.Name}</h4>
                                       <p className="mb-0">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserTwo?.Patient}</p>
                                    </div>
                                 </div>
                                 <p className="text-white mb-0">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserTwo?.description}</p>
                              </div>
                              <div className="carousel-item carousel-item-next carousel-item-left">
                                 <div className="auther-con w-100 d-inline-block">
                                    <figure className="mb-0 d-inline-block">
                                       <img src={test1} alt="auther-img" className="img-fluid" />
                                    </figure>
                                    <div className="auther-title d-inline-block">
                                       <h4 className="text-white">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserThree?.Name}</h4>
                                       <p className="mb-0">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserOne?.Patient}</p>
                                    </div>
                                 </div>
                                 <p className="text-white mb-0">{jsonData.testimonialPage?.testimonialsectionTwo?.reviewUserThree?.description}</p>
                              </div>
                           </div>
                           <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              {/* <!-- <span className="carousel-control-prev-icon" aria-hidden="true"></span> --> */}
                              <i className="fas fa-arrow-left"></i>
                              <span className="sr-only">Previous</span>
                           </a>
                           <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              {/* <!-- <span className="carousel-control-next-icon" aria-hidden="true"></span> --> */}
                              <i className="fas fa-arrow-right"></i>
                              <span className="sr-only">Next</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
