import React,{useState,useEffect} from 'react'
import Medical12 from '../../assets/images/Medical12.jpeg'
import data from '../../data.json'


export default function Medical() {
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
         <div className="w-100 float-left py-5 quality-system-con">
            <div className="container">
               <div className="row">

               <div className="col-lg-6 col-md-6">
                     <div className=" position-relative text-center">
                        {/* <figure className="mb-0 left-curve-img wow slideInLeft" style={{visibility: 'visible', animationName: 'slideInLeft'}}>
                           <img src={img1} alt="" className="img-fluid" />
                        </figure> */}
                        <figure className="mb-4">
                           <img src={Medical12} alt="quality-system-img" className="img-fluid human-img"/>
                        </figure>
                        {/* <figure className="mb-0 right-curve-img wow slideInRight" style={{visibility: 'visible', animationName: 'slideInRight'}}>
                           <img src={img3} alt="" className="img-fluid" />
                        </figure> */}
                     </div>
                  </div>

                  <div className="col-lg-6 col-md-6 d-flex align-items-center">
                     <div className="quality-system-left-con">
                       
                        <p className='mb-2'>{jsonData.MedicalPage?.section2?.description1}</p>
                        <p className=''>{jsonData.MedicalPage?.section2?.description2}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
