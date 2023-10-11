import React,{useState,useEffect} from 'react'
import ContactForm from './ContactForm'
import Email_conn from '../../assets/images/email.png'
import Call_us from '../../assets/images/phone-call.png'
import Location_us from '../../assets/images/map.png'
import data from '../../data.json'



export default function Enquiry() {
   const [jsonData, setJsonData] = useState({});
   const [funFactsData, setFunFactsData] = useState([]);


   useEffect(() => {
      setJsonData({...data});
      setFunFactsData(data.funFacts);
      console.log(data)

   }, []);
  return (
    <section>
         <div className="w-100 float-left Schedule-con">
            <div className="container">
               <div className="Schedule-heading text-center mb-5">
                  <h2 className='mb-1'>{jsonData.contactPage?.section2?.title}</h2>
                  <p>{jsonData.contactPage?.section2?.description}</p>
               </div>
               <div className='row'>
                  <div className='col-lg-6 col-md-12 col-12'>
                     <div className="Schedule-box text-md-left text-center">
                        <div className="row">
                           <div className="col-lg-12 ">
                              <div className="Schedule-box-item position-relative w-100 float-left">
                                 <figure className="mb-0 float-md-left overlay-img">
                                    <img src={Email_conn} width={'60px'} alt="Schedule-icon" className="img-fluid" />
                                 </figure>
                                 <div className="Schedule-box-title float-md-left overlay-img">
                                    <h5>Email</h5>
                                    <span className="d-block">{jsonData.footerSection?.section4?.email}</span>
                                    {/* <span className="d-block">support@eikonimaging.ai</span> */}
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-12 ">
                              <div className="Schedule-box-item position-relative w-100 float-left">
                                 <figure className="mb-0 float-md-left overlay-img">
                                    <img src={Call_us} width={'60px'} alt="Schedule-icon" className="img-fluid" />
                                 </figure>
                                 <div className="Schedule-box-title float-md-left overlay-img">
                                    <h5>Call</h5>
                                    <span className="d-block">+91 {jsonData.footerSection?.section4?.phone}</span>
                                    {/* <span className="d-block">support@eikonimaging.ai</span> */}
                                 </div>
                              </div>
                           </div>
                         
                           <div className="col-lg-12">
                              <div className="Schedule-box-item position-relative w-100 float-left">
                                 <figure className="mb-0 float-md-left overlay-img">
                                    <img src={Location_us} width={'60px'} alt="Schedule-icon" className="img-fluid" />
                                 </figure>
                                 <div className="Schedule-box-title float-md-left overlay-img">
                                    <h5>Location</h5>
                                    <span className="d-block">{jsonData.footerSection?.section4?.Address}</span>
                                 </div>
                              </div>
                           </div>
                     
                           {/* <div className="col-lg-12">
                              <div className="Schedule-box-item position-relative w-100 float-left mb-0">
                                 <figure className="mb-0 float-md-left overlay-img">
                                    <img src="assets/image/Schedule-icon4.png" alt="Schedule-icon" className="img-fluid" />
                                 </figure>
                                 <div className="Schedule-box-title float-md-left overlay-img">
                                    <h5>Working Hours</h5>
                                    <span className="d-block">Monday - Friday: 8AM - 9PM</span>
                                    <span className="d-block"> Weekends: Closed</span>
                                 </div>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-12'>
                     <ContactForm/>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
