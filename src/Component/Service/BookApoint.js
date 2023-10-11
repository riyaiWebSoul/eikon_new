import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'



export default function BookApoint() {
   const [jsonData, setJsonData] = useState({});
   const [funFactsData, setFunFactsData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/medical/';

    // Make an HTTP GET request to the backend
    axios
      .get(apiUrl)
      .then((response) => {
        setJsonData(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
        <div className="w-100 float-left news-letter-con">
            <div className="container">
               <div className="news-letter-inner-con banner-overlay-img">
               <div className="row overlay-img align-items-center">
                     <div className="col-lg-6 col-md-5">
                        <div className="news-letter-title">
                           <h2  className="text-white mb-0 hummmarh2">{jsonData.MedicalPage?.section1?.title}
                           </h2>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-7">
                        <div className="news-letter-input-con position-relative">
                           <div className="news-letter-input-feild">
                              <input type="email" placeholder="Enter Your Email:" className="w-100"/>
                           </div>
                           <button>
                           <i className="far fa-envelope"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
  )
}
