import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function SectionService1() {
   const [jsonData, setJsonData] = useState([]);
   useEffect(() => {
      const apiUrl = 'http://localhost:8080/medical/';
      // Make an HTTP GET request to the backend
      axios
        .get(apiUrl)
        .then((response) => {
          setJsonData(response.data[0]);
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
   <div>
   <section>
            <div className="w-100 float-left  text-xl-left text-lg-left text-center header-and-banner-con banner-overlay-img">
            <div className="container">
                  <div className="generic-banner-content text-white text-center">
                     <h1>{jsonData.MedicalPage?.title}</h1>
                     <div className="row justify-content-center">
                     <p className="text-white mb-0 mx-md-5 col-md-8">{jsonData.MedicalPage?.description}</p>

                     </div>
                  </div>
               </div>
            </div>
         </section>
</div>
  )
}
