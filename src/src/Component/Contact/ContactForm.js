import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    subject: Yup.string().required('Subject is required'),
    comments: Yup.string().required('Message is required'),
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      comments: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('./routes/appointment', values);
        console.log('Data submitted:', values);

        // After successful submission, navigate to the thank you page
        navigate('/thank');
      } catch (error) {
        console.error('Error creating employee:', error);
      }
    },
  });

  return (
    <div>
      <form className="contact-form-plan-box" onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name:"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error">{formik.errors.name}</div>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email:"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone:"
                name="phone"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="error">{formik.errors.phone}</div>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject:"
                name="subject"
                id="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
              />
              {formik.touched.subject && formik.errors.subject && (
                <div className="error">{formik.errors.subject}</div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="textarea form-group">
            <textarea
              className="form-control"
              placeholder="Message:"
              rows="3"
              name="comments"
              id="comments"
              value={formik.values.comments}
              onChange={formik.handleChange}
            ></textarea>
            {formik.touched.comments && formik.errors.comments && (
              <div className="error">{formik.errors.comments}</div>
            )}
          </div>
        </div>
        <div className="submitform-button">
          <button
            type="submit"
            className="submitform-btn appointment-btn ml-auto mr-auto d-block"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
