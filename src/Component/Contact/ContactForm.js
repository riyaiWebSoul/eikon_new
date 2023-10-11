import React ,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {
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
  
      const response = await axios.post('http://localhost:8080/enquiry', values);
      navigate('/thank')
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
