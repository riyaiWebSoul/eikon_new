import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import img1 from '../../assets/images/svg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BookingAppointment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    time: '',
    date: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Prevent the form from submitting automatically
      setSubmitting(true); // Set form submission state to true
  
      const response = await axios.post('http://localhost:8080/appointments', values);
      navigate('/success')
      console.log(response.data);
      // Optionally, you can navigate to a success page or show a success message here.
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with an error status code
        console.error('Server responded with error:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received from the server:', error.request);
      } else {
        // Something else went wrong
        console.error('Error during the request:', error.message);
      }
      // Handle the error and show an error message.
    } finally {
      setSubmitting(false); // Set form submission state back to false
    }
  };
  

  // Define your validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Must be a valid phone number')
      .required('Phone number is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    gender: Yup.string().required('Gender is required'),
    comments: Yup.string().required('Message is required'),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: handleSubmit,
  });

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
                <form className="contact-form" onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          className="form-control"
                          placeholder="Full Name:"
                          name="name"
                          id="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error">{formik.errors.name}</div>
                        ) : null}
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
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="error">{formik.errors.email}</div>
                        ) : null}
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
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                          <div className="error">{formik.errors.phone}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-control position-relative"
                          required
                          name="gender"
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="">Choose Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {formik.touched.gender && formik.errors.gender ? (
                          <div className="error">{formik.errors.gender}</div>
                        ) : null}
                        <i className="fas fa-angle-down down-icon"></i>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          required
                          name="date"
                          id="date"
                          value={formik.values.date}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.date && formik.errors.date ? (
                          <div className="error">{formik.errors.date}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="time"
                          className="form-control"
                          required
                          name="time"
                          id="time"
                          value={formik.values.time}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.time && formik.errors.time ? (
                          <div className="error">{formik.errors.time}</div>
                        ) : null}
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
                          value={formik.values.comments}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        ></textarea>
                        {formik.touched.comments && formik.errors.comments ? (
                          <div className="error">{formik.errors.comments}</div>
                        ) : null}
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
