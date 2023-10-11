import React, { useEffect, useState } from 'react'
import img1 from '../../assets/images/small-left-curve-img.png'
import img2 from '../../assets/images/run-20221119101612544.png'
import img3 from '../../assets/images/small-right-curve-img.png'
import { Link } from 'react-router-dom'
import data from '../../component.json'


export default function AboutHome() {
 
   const [funFactsData, setFunFactsData] = useState([]);


   useEffect(() => {
    
      setFunFactsData(data.funFacts);
      console.log(data)
      

   }, []);
  return (
    <div>
        <section>
         <div className="w-100 float-left py-5 quality-system-con">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-6 d-flex align-items-center">
                     <div className="quality-system-left-con">                 
      {data.map((item, index) => (
        <div key={index} id={item.id}>
          <h1> {item.section2?.title}</h1>
          <p className='mb-2'>{item.section2?.description1}</p>
                        <p className='mb-2'>{item.section2?.description2}</p>

                        
        </div>
      ))}
 <div className="quality-system-list">
                           <ul className="list-unstyled">
                              <li className="position-relative"><i className="fas fa-circle"></i>24 Hour Service</li>
                              <li className="position-relative"><i className="fas fa-circle"></i>Modern Clinic</li>

                           </ul>
                        </div>
                        <div className="quality-system-list">
                           <ul className="list-unstyled">
                           
                              {/* <li className="position-relative"><i className="fas fa-circle"></i>Expert Doctors</li>
                              <li className="position-relative"><i className="fas fa-circle"></i>Maping ecommerce</li> */}
                             <li className="position-relative"><i className="fas fa-circle"></i>Update Covid-19</li>
                              <li className="position-relative"><i className="fas fa-circle"></i>24/7 Help Center</li>
                           </ul>
                        </div>
                        <Link to="/about" className="appointment-btn">Read More</Link>
                       
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="quality-system-right-con position-relative text-center">
                        {/* <figure className="mb-0 left-curve-img wow slideInLeft" style={{visibility: 'visible', animationName: 'slideInLeft'}}>
                           <img src={img1} alt="" className="img-fluid" />
                        </figure> */}
                        <figure className="mb-0">
                           <img src={img2} alt="quality-system-img" className="img-fluid human-img"/>
                        </figure>
                        {/* <figure className="mb-0 right-curve-img wow slideInRight" style={{visibility: 'visible', animationName: 'slideInRight'}}>
                           <img src={img3} alt="" className="img-fluid" />
                        </figure> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
