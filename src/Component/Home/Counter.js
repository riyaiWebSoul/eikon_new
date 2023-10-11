import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from '../../assets/images/fun-facts-icon11.png';
import img2 from '../../assets/images/fun-facts-icon22.png';
import img3 from '../../assets/images/fun-facts-icon33.png';
import img4 from '../../assets/images/fun-facts-icon44.png';

export default function Counter() {
  const [jsonData, setJsonData] = useState({});
  const [count, setCount] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/healingTouch/';

    axios.get(apiUrl)
      .then(({ data }) => {
        setJsonData({ title: data[0]?.title });
        setCount(data[0]?.card || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="w-100 float-left fun-facts-con pt-0 pb-0">
      <div className="about-fun-facts-con banner-overlay-img">
        <div className="container">
          <div className="text-center row justify-content-center overlay-img about-fun-facts-title">
            <h2 className="text-white col-md-4">{jsonData.title}</h2>
          </div>
          <div className="fun-facts-box-con text-sm-left text-center pt-0 overlay-img">
            <div className="row bg-white">
              {count.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-6 pl-0 pr-0 border-right-0">
                  <div className="fun-facts-box-item d-sm-flex align-items-sm-center">
                    <figure className="mb-0 d-inline-block">
                      <img src={index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : img4} alt={`fun-facts-icon${index + 1}`} className="img-fluid" />
                    </figure>
                    <div className="fun-facts-item-content d-inline-block">
                      <div className="position-relative fun-facts-item-title d-inline-block">
                        <h2 className="count">{item.count}</h2>
                        <span>{index === 3 ? '%' : '+'}</span>
                      </div>
                      <p className="mb-0">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
