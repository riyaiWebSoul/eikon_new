import React, { useState, useEffect } from 'react';
import test1 from 'file:///home/iwebsoul/Desktop/shravan%20projects/eikon/client/src/assets/images/auther-img.png';
import axios from 'axios';

export default function Testimonial() {
  const [jsonData, setJsonData] = useState({});
  const [review, setReview] = useState([]);

  useEffect(() => {
    // Define the backend API endpoint URL
    const apiUrl = 'http://localhost:8080/PatientReview/';

    // Make an HTTP GET request to the backend
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        setJsonData(...data);
        setReview(...data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <section>
        <div className="w-100 float-left slider-con text-lg-left text-center">
          <div className="slider-inner-con banner-overlay-img">
            <div className="container">
              <div className="row overlay-img">
                <div className="col-lg-4 d-flex align-items-center">
                  <div className="slider-left-con">
                    <h2 className="text-white mr-md-5 pr-md-5">
                      {jsonData.testimonial?.title}
                    </h2>
                    <p className="mb-0 mr-md-5 pr-md-5">
                      {jsonData.testimonial?.description}
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {review.userReview &&
                        review.userReview.map((item, index) => (
                          <div
                            className={`carousel-item ${
                              index === 0 ? 'active' : ''
                            }`}
                            key={index}
                          >
                            <div className="auther-con w-100 d-inline-block">
                              <figure className="mb-0 d-inline-block">
                                <img
                                  src={test1}
                                  alt="auther-img"
                                  className="img-fluid"
                                />
                              </figure>
                              <div className="auther-title d-inline-block">
                                <h4 className="text-white">
                                  {item.Name}
                                </h4>
                                <p className="mb-0">
                                  {item.Patient}
                                </p>
                              </div>
                              <p className="text-white mb-0">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fas fa-arrow-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fas fa-arrow-right"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
