import React,{useState,useEffect} from 'react'
import img1 from '../../assets/images/fun-facts-icon11.png'
import img2 from '../../assets/images/fun-facts-icon22.png'
import img3 from '../../assets/images/fun-facts-icon33.png'
import img4 from '../../assets/images/fun-facts-icon44.png'
import data from '../../data.json'


export default function Counter() {
   const [jsonData, setJsonData] = useState([{}]);
   const [funFactsData, setFunFactsData] = useState([]);


   useEffect(() => {
      setJsonData(data);
      setFunFactsData(data.funFacts);
      // console.log(data)

   }, []);
  return (
    <div>
<div className="w-100 float-left fun-facts-con  pt-0 pb-0">
               <div className="about-fun-facts-con banner-overlay-img">
            <div className="container">
                  <div className="text-center row justify-content-center overlay-img about-fun-facts-title">
                     <h2 className="text-white col-md-4">{jsonData.counterPage?.title}
                     </h2>
                  </div>
                  <div className="fun-facts-box-con text-sm-left text-center pt-0 overlay-img">
                     <div className="row bg-white">
                        <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                           <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure className="mb-0 d-inline-block">
                                 <img src={img1} alt="fun-facts-icon1" className="img-fluid"/>
                              </figure>
                              <div className="fun-facts-item-content d-inline-block">
                                 <div className="position-relative fun-facts-item-title d-inline-block">
                                    <h2 className="count">{jsonData.counterPage?.HappyPatients?.count}</h2>
                                    <span>+</span>
                                 </div>
                                 <p className="mb-0">{jsonData.counterPage?.HappyPatients?.title}</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                           <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure className="mb-0 d-inline-block">
                                 <img src={img2} alt="fun-facts-icon1" className="img-fluid"/>
                              </figure>
                              <div className="fun-facts-item-content d-inline-block">
                                 <div className="position-relative fun-facts-item-title d-inline-block">
                                    <h2 className="count">{jsonData.counterPage?.HospitalRoom?.count}</h2>
                                    <span>+</span>
                                 </div>
                                 <p className="mb-0">{jsonData.counterPage?.HospitalRoom?.title}</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                           <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure className="mb-0 d-inline-block">
                                 <img src={img3} alt="fun-facts-icon1" className="img-fluid"/>
                              </figure>
                              <div className="fun-facts-item-content d-inline-block">
                                 <div className="position-relative fun-facts-item-title d-inline-block">
                                    <h2 className="count">{jsonData.counterPage?.QualifiedDoctor?.count}</h2>
                                    <span>+</span>
                                 </div>
                                 <p className="mb-0">{jsonData.counterPage?.QualifiedDoctor?.title}</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0">
                           <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                              <figure className="mb-0 d-inline-block">
                                 <img src={img4} alt="fun-facts-icon1" className="img-fluid"/>
                              </figure>
                              <div className="fun-facts-item-content d-inline-block">
                                 <div className="position-relative fun-facts-item-title d-inline-block">
                                    <h2 className="count">{jsonData.counterPage?.PositiveFeedback?.count}</h2>
                                    <span>%</span>
                                 </div>
                                 <p className="mb-0">{jsonData.counterPage?.PositiveFeedback?.title}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
{/* 
          <section>
         <div className="w-100 float-left fun-facts-con">
            <div className="container">
               <div className="row text-xl-left text-lg-left text-center">
                  <div className="col-lg-6">
                     <div className="fun-facts-heading ">
                        <h2>A Healing Touch to Heal
                           you Completely.
                        </h2>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="fun-facts-content">
                        <p className=" mb-0">This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People creating templates, and many other uses.</p>
                     </div>
                  </div>
               </div>
               <div className="fun-facts-box-con text-sm-left text-center">
                  <div className="row bg-white">
                     <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                        <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure className="mb-0 d-inline-block">
                              <img src={img1} alt="fun-facts-icon1" className="img-fluid" />
                           </figure>
                           <div className="fun-facts-item-content d-inline-block">
                              <div className="position-relative fun-facts-item-title d-inline-block">
                                 <h2 className="count">00</h2>
                                 <span>+</span>
                              </div>
                              <p className="mb-0">Happy Patients</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                        <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure className="mb-0 d-inline-block">
                              <img src={img2} alt="fun-facts-icon1" className="img-fluid" />
                           </figure>
                           <div className="fun-facts-item-content d-inline-block">
                              <div className="position-relative fun-facts-item-title d-inline-block">
                                 <h2 className="count">00</h2>
                                 <span>+</span>
                              </div>
                              <p className="mb-0">Hospital Room</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                        <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure className="mb-0 d-inline-block">
                              <img src={img3} alt="fun-facts-icon1" className="img-fluid" />
                           </figure>
                           <div className="fun-facts-item-content d-inline-block">
                              <div className="position-relative fun-facts-item-title d-inline-block">
                                 <h2 className="count">00</h2>
                                 <span>+</span>
                              </div>
                              <p className="mb-0">Qualified Doctor</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-6 pl-0 pr-0">
                        <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                           <figure className="mb-0 d-inline-block">
                              <img src={img4} alt="fun-facts-icon1" className="img-fluid" />
                           </figure>
                           <div className="fun-facts-item-content d-inline-block">
                              <div className="position-relative fun-facts-item-title d-inline-block">
                                 <h2 className="count">00</h2>
                                 <span>%</span>
                              </div>
                              <p className="mb-0">Positive Feedback</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section> */}
    </div>
  )
}
