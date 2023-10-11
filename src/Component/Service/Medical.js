import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Medical12 from '../../assets/images/Medical12.jpeg';

export default function Medical() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/medical/';

    // Make an HTTP GET request to the backend
    axios
      .get(apiUrl)
      .then((response) => {
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <section>
        <div className="w-100 float-left py-5 quality-system-con">
          <div className="container">
            {jsonData.map((item, index) => (
              <div key={item._id} className="row">
                <div className="col-lg-6 col-md-6">
                  <div className=" position-relative text-center">
                    <figure className="mb-4">
                      <img src={Medical12} alt="quality-system-img" className="img-fluid human-img" />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-center">
                  <div className="quality-system-left-con">
                    {item.MedicalPage && item.MedicalPage.section2 && (
                      <>
                        <p className='mb-2'>{item.MedicalPage.section2.description}</p>
                        <p className=''>{item.MedicalPage.section2.subDescription}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
