import React,{useState,useEffect} from 'react'
import LOGO from '../assets/images/Logo.gif'
import pdf1 from '../assets/images/IDEATOR.pdf'
import pdf2 from '../assets/images/IDEATOR-FP (1).pdf'
import pdf3 from '../assets/images/iDEATOR-DWS.pdf'
import { Link } from 'react-router-dom'
import axios from 'axios';

// import data from '../component.json'




export default function Footer() {
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
 
  
  console.log(jsonData)
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
                           <p className="pr-5 pl-0">{jsonData.rightSection?.title}</p>
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
                           <h5>{jsonData.section?.title}</h5>
                           
                           <ul className="list-unstyled mb-0">
                   
                              <li><i className="fas fa-caret-right"></i><Link to='/'>{jsonData.MidSection?.details[0]}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/about'>{jsonData.MidSection?.details[1]}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/medical'>{jsonData.MidSection?.details[2]}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/maping-ecommerce'>{jsonData.MidSection?.details[3]}</Link></li>
                              <li><i className="fas fa-caret-right"></i><Link to='/contact'> {jsonData.MidSection?.details[4]}</Link></li>       
                           
                        
                           </ul>

                        </div>
                     </div>
                     <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="weight-footer-content">
                           <h5>Product</h5>
                           <ul className="list-unstyled mb-0">
                           <li ><i className="fas fa-caret-right"></i><Link target="_blank" to={pdf1}>iDEATOR</Link> </li>
                           <li ><i className="fas fa-caret-right"></i><Link target="_blank" to={pdf2}>iDEATOR-FP</Link> </li>
                              <li ><i className="fas fa-caret-right"></i><Link target="_blank" to={pdf3}>iDEATOR-DWS</Link> </li>
                              
                        
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-5 col-12">
                        <div className="weight-footer-content">
                           <h5>{jsonData.section?.title}</h5>
                           <ul className="list-unstyled mb-0">
                              <li ><Link to="mailto:hemant.borse@eikonimaging.ai" target='_blank'><span>Email: </span>{jsonData.section?.email}</Link></li>
                              <li><Link to="tel:96543 70277" target='_blank'><span>Phone: </span>+91 {jsonData.section?.phone}</Link></li>
                              {/* <li><span>Fax: </span>+1 ( 987 ) 654 321  9 9</li> */}
                              <li className="mb-0"><Link target='_blank'
                                 to="https://www.google.com/maps?ll=19.018452,73.085876&z=16&t=m&hl=en&gl=JP&mapclient=embed&cid=1094941359241037706"
                              ><span className="pr-2"> Address:</span>{jsonData.section?.Address}</Link>
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
