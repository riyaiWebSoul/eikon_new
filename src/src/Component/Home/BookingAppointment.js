import React, { useState } from 'react';
import img1 from '../../assets/images/svg.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BookingAppointment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/backend', formData);
      console.log('Data submitted:', formData);

      // After successful submission, navigate to the thank you page
      navigate('/success');
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div>
      <section id="appointment-form">
        <div className="w-100 float-left fun-facts-con form-main-con" id="contact-form">
          <div className="container">
            <div className="text-center">
              <h2>Book An Appointment</h2>
              <p></p>
            </div>
            <div className="row">
              <div className="col-lg-6 order-xl-0 order-lg-0 order-2">
                <div className="form-left-con position-relative text-center">
                  <figure className="mb-0">
                    <img src={img1} alt="form-left-img" className="img-fluid human-img form-left-img" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          className="form-control"
                          placeholder="Name:"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          required
                          className="form-control"
                          placeholder="Email:"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          className="form-control"
                          placeholder="Mobile Number:"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <select className="form-control position-relative" required>
                          <option>Choose Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <i className="fas fa-angle-down down-icon"></i>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="Date" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input type="time" className="form-control" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="textarea form-group W-100">
                        <textarea
                          className="form-control"
                          required
                          placeholder="Message:"
                          rows="3"
                          name="comments"
                          id="comments"
                          value={formData.comments}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button className="appointment-btn border-none" type="submit">
                    Make Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
