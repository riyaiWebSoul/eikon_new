import React,{useState,useEffect} from 'react'
import LOGO from '../assets/images/Logo.gif'
import pdf1 from '../assets/images/IDEATOR.pdf'
import pdf2 from '../assets/images/IDEATOR-FP (1).pdf'
import pdf3 from '../assets/images/iDEATOR-DWS.pdf'
import { Link } from 'react-router-dom'
import data from '../data.json'




export default function Footer() {
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
         <div className="w-100 float-left weight-footer-con">
            <div className="container">
               <div className="weight-footer-inner-con">
                  <div className="row">
                     <div className="col-lg-4 col-md-6 col-12 text-xl-left text-lg-left">
                        <div className="weight-footer-content ">
                           <figure>
                              <img src={LOGO} alt="footer-logo" width={'80%'} className="img-fluid" />
                           </figure>
                           <p className="pr-5 pl-0">{jsonData.footerSection?.section1?.description}</p>
                           <div className="weight-social-list">
                              <ul className="list-unstyled mb-0">
                                 <li className="d-inline-block"><Link target="_blank" to="https://www.facebook.com/"><i className="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                                 <li className="d-inline-block"><Link target="_blank" to="https://twitter.com/?lang=en" ><i className="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                                 <li className="d-inline-block"><Link target="_blank" to="https://www.linkedin.com/signup" ><i className="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                                 <li className="d-inline-block"><Link target="_blank" to="https://www.pinterest.com/" ><i className="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="weight-footer-content">
                           <h5>{jsonData.footerSection?.section2?.title}</h5>
                           <ul className="list-unstyled mb-0">
                              <li><i className="fas fa-caret-right"></i><Link to='/'>{jsonData.footerSection?.section2?.details?.home}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/about'>{jsonData.footerSection?.section2?.details?.about}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/medical'>{jsonData.footerSection?.section2?.details?.medical}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/maping-ecommerce'>{jsonData.footerSection?.section2?.details?.Mapingecommerce}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/Contact'> {jsonData.footerSection?.section2?.details?.ContactUs}</Link></li>

                              
                             
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="weight-footer-content">
                           <h5>{jsonData.footerSection?.section3?.title}</h5>
                           <ul className="list-unstyled mb-0">
                           <li ><i className="fas fa-caret-right"></i><Link target="_blank" to={pdf1}>iDEATOR</Link> </li>
                           <li ><i className="fas fa-caret-right"></i><Link target="_blank" to={pdf2}>iDEATOR-FP</Link> </li>
                              <li ><i className="fas fa-caret-right"></i><Link target="_blank" to={pdf3}>iDEATOR-DWS</Link> </li>
                              
                        
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-5 col-12">
                        <div className="weight-footer-content">
                           <h5>{jsonData.footerSection?.section4?.title}</h5>
                           <ul className="list-unstyled mb-0">
                              <li ><Link to="mailto:hemant.borse@eikonimaging.ai" target='_blank'><span>Email: </span>{jsonData.footerSection?.section4?.email}</Link></li>
                              <li><Link to="tel:96543 70277" target='_blank'><span>Phone: </span>+91 {jsonData.footerSection?.section4?.phone}</Link></li>
                              {/* <li><span>Fax: </span>+1 ( 987 ) 654 321  9 9</li> */}
                              <li className="mb-0"><Link target='_blank'
                                 to="https://www.google.com/maps?ll=19.018452,73.085876&z=16&t=m&hl=en&gl=JP&mapclient=embed&cid=1094941359241037706"
                              ><span className="pr-2"> Address:</span>{jsonData.footerSection?.section4?.Address}</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>


      <div className="w-100 float-left footer-con text-xl-left text-lg-left text-center">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12 col-12 text-center">
                  <p className="mb-0">Copyright ©2023 Eikon Imaging All Rights Reserved</p>
               </div>
               {/* <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-center">
                  <figure className="mb-0 d-inline-block">
                     <img src="assets/image/payment-img1.png" alt="payment-img" className="img-fluid"/>
                  </figure>
                  <figure className="mb-0 d-inline-block">
                     <img src="assets/image/payment-img2.png" alt="payment-img" className="img-fluid"/>
                  </figure>
                  <figure className="mb-0 d-inline-block">
                     <img src="assets/image/payment-img3.png" alt="payment-img" className="img-fluid"/>
                  </figure>
                  <figure className="mb-0 d-inline-block mr-0">
                     <img src="assets/image/payment-img4.png" alt="payment-img" className="img-fluid"/>
                  </figure>
               </div> */}
            </div>
         </div>
      </div>


    </div>
  )
}
