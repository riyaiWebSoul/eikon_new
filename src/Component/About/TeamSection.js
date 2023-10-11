import React, { useState, useEffect } from 'react';
import Team1 from '../../assets/images/team.jpeg';
import axios from 'axios';

export default function TeamSection() {
 
  const [drTeam, setDrTeam] = useState([]);

  useEffect(() => {
    // Define the backend API endpoint URL
    const apiUrl = 'http://localhost:8080/drList/';

    // Make an HTTP GET request to the backend
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        setDrTeam(...data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Conditionally render teamListItems based on drList availability
  let teamListItems = null;
  if (drTeam.DrTeamList) {
    teamListItems = drTeam.DrTeamList.map((drTeam) => (
      <div className="col-lg-4 col-md-4" key={drTeam.id}>
      
                                    <div className="professional-box-item text-center">
                                        <a>
                                            <figure className="mb-0">
                                                <img src={drTeam.image} alt="professional-box-img" className="img-fluid rounded-circle" />
                                            </figure>
                                            <h5>{drTeam.Name}</h5>
                                            <small className="d-block">{drTeam.Post}</small>
                                            <span className="d-block">{drTeam.description}</span>
                                        </a><div className="professional-box-social-list"><a href="team-detail.html">
                                        </a>
                                     
                                        </div>

                                    </div>
      </div>
    ));
  }

  return (
    <div>
      <section>
        <div className="w-100 float-left professional-con">
          <div className="container">
            <div className="professional-title text-center">
              <h2>{drTeam.title}</h2>
              <div className="row justify-content-center">
                <p className="col-8 mx-lg-5">{drTeam.description}</p>
              </div>
            </div>
            <div className="professional-box">
              <div className="row">{teamListItems}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
