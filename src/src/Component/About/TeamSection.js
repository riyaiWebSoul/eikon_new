import React,{useState,useEffect} from 'react'
import Team1 from "../../assets/images/team.jpeg"
import data from '../../data.json'


export default function TeamSection() {

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
                <div className="w-100 float-left professional-con">
                    <div className="container">
                        <div className="professional-title text-center">
                            <h2>{jsonData.aboutPageSection3?.title}</h2>
                            <div className="row justify-content-center">
                            <p className="col-8 mx-lg-5">{jsonData.aboutPageSection3?.description}
                            </p>
                            </div>
                           
                        </div>
                        <div className="professional-box">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="professional-box-item text-center">
                                        <a>
                                            <figure className="mb-0">
                                                <img src={Team1} alt="professional-box-img" className="img-fluid rounded-circle" />
                                            </figure>
                                            <h5>{jsonData.aboutPageSection3?.DrTeamList?.DrOne.Name}</h5>
                                            <small className="d-block">{jsonData.aboutPageSection3?.DrTeamList?.DrOne.Post}</small>
                                            <span className="d-block">{jsonData.aboutPageSection3?.DrTeamList?.DrOne.description}</span>
                                        </a><div className="professional-box-social-list"><a href="team-detail.html">
                                        </a>
                                        {/* <ul className="list-unstyled mb-0"><a href="team-detail.html">
                                        </a><li className="d-inline-block"><a href="team-detail.html"></a><a href="https://www.facebook.com/"><i className="fab fa-facebook-square d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                                <li className="d-inline-block"><a href="https://twitter.com/?lang=en"><i className="fab fa-twitter-square d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                                <li className="d-inline-block"><a href="https://www.linkedin.com/signup"><i className="fab fa-linkedin d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                                <li className="d-inline-block"><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-square mr-0 d-flex align-items-center justify-content-center text-white pr-0"></i></a></li>
                                            </ul> */}
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-lg-4 col-md-4">
                                    <div className="professional-box-item text-center">

                                        <figure className="mb-0">
                                            <img src={Team1} alt="professional-box-img" className="img-fluid rounded-circle" />
                                        </figure>
                                        <h5>{jsonData.aboutPageSection3?.DrTeamList?.DrTwo.Name}</h5>
                                        <small className="d-block">{jsonData.aboutPageSection3?.DrTeamList?.DrTwo.Post}</small>
                                        <span className="d-block">{jsonData.aboutPageSection3?.DrTeamList?.DrTwo.description}</span>
                                        <div className="professional-box-social-list"><a href="team-detail.html">
                                        </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-lg-4 col-md-4">
                                    <div className="professional-box-item text-center mb-0">

                                        <figure className="mb-0">
                                            <img src={Team1} alt="professional-box-img" className="img-fluid rounded-circle" />
                                        </figure>
                                        <h5>{jsonData.aboutPageSection3?.DrTeamList?.DrThree.Name}</h5>
                                        <small className="d-block">{jsonData.aboutPageSection3?.DrTeamList?.DrThree.Post}</small>
                                        <span className="d-block">{jsonData.aboutPageSection3?.DrTeamList?.DrThree.description}</span>
                                        <div className="professional-box-social-list"><a href="team-detail.html">
                                        </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
