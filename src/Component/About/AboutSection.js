import React,{useState,useEffect} from 'react'
import axios from 'axios'
import img1 from '../../assets/images/small-left-curve-img.png'
import img2 from '../../assets/images/run-20221119101612544.png'
import img3 from '../../assets/images/small-right-curve-img.png'
import { Link } from 'react-router-dom'


export default function AboutSection() {

   const [jsonData, setJsonData] = useState({});


   useEffect(() => {
      // Define the backend API endpoint URL
      const apiUrl = 'http://localhost:8080/about/';
  
      // Make an HTTP GET request to the backend
      axios.get(apiUrl)
        .then((response) => {
           const data = response.data;
           console.log(response.data);
           setJsonData(data[1]) 

        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <div>
       <section>
         <div className="w-100 float-left py-5 quality-system-con About_just">
            <div className="container">
               <div className="row">
               <div className="col-lg-6 col-md-6">
                     <div className="quality-system-right-con position-relative text-center">
                        {/* <figure className="mb-0 left-curve-img wow slideInLeft" style={{visibility: 'visible', animationName: 'slideInLeft'}}>
                           <img src={img1} alt="" className="img-fluid" />
                        </figure> */}
                        <figure className="mb-4">
                           <img src={img2} alt="quality-system-img" className="img-fluid human-img"/>
                        </figure>
                        {/* <figure className="mb-0 right-curve-img wow slideInRight" style={{visibility: 'visible', animationName: 'slideInRight'}}>
                           <img src={img3} alt="" className="img-fluid" />
                        </figure> */}
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex align-items-center">
                     <div className="quality-system-left-con">
                        
                        <h2>{jsonData.title}
                        </h2>
                        <p className='mb-2'>{jsonData.description}</p>
                        <p className='mb-2'>{jsonData.descriptionSub1}</p>
                        <p className='mb-2'>{jsonData.descriptionSub2}</p>
                        <p className='mb-0'>{jsonData.descriptionSub3}</p>
                        
                        {/* <Link to="#" className="appointment-btn mt-2">Read More</Link> */}
                     </div>
                  </div>
                
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}