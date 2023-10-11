import React,{useState,useEffect} from 'react'
import data from '../../data.json'


export default function SectionService2() {
   const [jsonData, setJsonData] = useState({});
   const [funFactsData, setFunFactsData] = useState([]);


   useEffect(() => {
      setJsonData(data);
      setFunFactsData(data.funFacts);
      console.log(data)

   }, []);
  return (
    <div>
         <section>
                  <div className="w-100 float-left  text-xl-left text-lg-left text-center header-and-banner-con banner-overlay-img">
                  <div className="container">
                        <div className="generic-banner-content text-white text-center">
                           <h1>{jsonData.MapingEcommerce?.title}</h1>
                           <div className="row justify-content-center">
                           <p className="text-white mb-0 mx-md-5 col-md-8">{jsonData.MapingEcommerce?.description}</p>

                           </div>
                        </div>
                     </div>
                  </div>
               </section>
    </div>
  )
}
