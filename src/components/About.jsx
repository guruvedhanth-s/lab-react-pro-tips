import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../App.css"


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(15, 'Must be 15 digits or less')
    .required('Phone number is required'),
});


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
};


const About = () => {

  const handleSubmit = (values, { setSubmitting }) => {

    console.log('Form submitted with values:', values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='container'>
        <div>
          <Field type="text" id="firstName" name="firstName" placeholder="First name" />
          <ErrorMessage name="firstName" component="div" className="error" />
        </div>

        <div>
          <Field type="text" id="lastName" name="lastName" placeholder="Last name" />
          <ErrorMessage name="lastName" component="div" className="error" />
        </div>

        <div>
          <Field type="email" id="email" name="email" placeholder="Email address" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div>
          <Field
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone number"
          />
          <ErrorMessage name="phoneNumber" component="div" className="error" />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
        </div>

      </Form>
    </Formik>
  );
};

export default About;