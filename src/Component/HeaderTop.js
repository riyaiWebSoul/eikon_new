import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function HeaderTop() {
   const [jsonData, setJsonData] = useState([]);

   useEffect(() => {
      const apiUrl = 'http://localhost:8080/footer/';
      // Make an HTTP GET request to the backend
      axios
        .get(apiUrl)
        .then((response) => {
          setJsonData(...response.data);
        
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <div> 
    <div className="w-100 float-left top-bar-main-con text-white text-xl-left text-lg-left text-md-left text-center">
       <div className="container">
          <div className="row">
             <div className="col-lg-6 col-md-6 col-12">
                <div className="top-bar-left-con ">
                   <i className="fas fa-map-marker-alt mx-1"></i>
                   <span>{jsonData.section?.Address}</span>
                </div>
             </div>
             <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                <div className="top-bar-right-con d-flex">
                   <span>Get Social:</span>
                      <ul className="list-unstyled mb-0">
                         <li className="float-left"><Link target='_blank' to="https://www.facebook.com/" className="text-white"><i className="fab fa-facebook-square"></i></Link></li>
                         <li className="float-left"><Link target='_blank' to="https://twitter.com/?lang=en" className="text-white"><i className="fab fa-twitter-square"></i></Link></li>
                         <li className="float-left"><Link target='_blank' to="https://www.pinterest.com/" className="text-white"><i className="fab fa-pinterest-square"></i></Link></li>
                         <li className="float-left"><Link target='_blank' to="https://www.youtube.com/" className="text-white"><i className="fab fa-youtube-square"></i></Link></li>
                      </ul>
                </div>
             </div>
          </div>
       </div>
    </div></div>
  )
}
