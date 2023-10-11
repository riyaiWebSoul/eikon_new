import React, { useEffect, useState } from 'react'
import Banner_ani1 from '../../assets/images/small-left-curve-img.png'
import Banner_ani2 from '../../assets/images/1(7).jpg'
import Banner_ani3 from '../../assets/images/small-right-curve-img.png'
import { Link } from 'react-router-dom'
import data from '../../component.json'


export default function Banner() {
   const [jsonData, setJsonData] = useState({});

   useEffect(() => {   
      setJsonData(...data);
      console.log(data)
   }, []);
   return (
      <div>
         <section>
            <div className="w-100 float-left banner-con text-xl-left text-lg-left text-center header-and-banner-con banner-overlay-img">
               <div className="container">

                  <div className="row ">
                     <div className="col-lg-6 order-xl-0 order-lg-0 order-2">
                        <div className="banner-left-con">
                           {/* <figure className="mb-0 left-curve-img wow slideInLeft">
                                    <img src={Banner_ani1} alt="" className="img-fluid" />
                                 </figure> */}
                           <figure className="mb-0">
                 
                              <img src={Banner_ani2} alt="banner-left-img" className="img-fluid banner-left-img" />
                           </figure>
                           {/* <figure className="mb-0 right-curve-img wow slideInRight">
                                    <img src={Banner_ani3} alt="" className="img-fluid" />
                                 </figure> */}
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="banner-right-content text-white">
                        {  data.map((item, index) => (
        <div key={index} id={item.id}>
       
       <h5 style={{ color: '#00bcad' }}>{item.section1?.title} </h5>
                           <h1 className='banner_headingh1'>{item.section1?.heading}
                           </h1>
                        
        </div>
      ))}
                          
                           <p className="text-white col-lg-10 col-md-9 ml-xl-0 mr-xl-0 ml-lg-0 mr-lg-0 ml-auto mr-auto pl-0 pr-0">{jsonData.section1?.description}</p>
                           <Link to="/about" className="appointment-btn ">Read More</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
