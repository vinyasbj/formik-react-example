import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Formik } from 'formik';


const App = () => (
  
    <Formik 
    // validateOnBlur={false}
    initialValues={{ name: '',color: '' }}
    validate = {values => {
      let errors = {};
      if(!values.name) {
        errors.name = 'Name is required';
      }
      if( !values.color) {
        errors.color = 'Select Color'
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {  
      // console.log('submitting', values);  
      setTimeout(() => {

        alert(JSON.stringify(values, null, 2));
    
        setSubmitting(false);
    
    }, 400);
    }} >

    {
      ({ handleSubmit, handleChange, values,errors,handleBlur ,touched,isSubmitting}) => (
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} 
              onBlur={handleBlur}
              value={values.name}   
              name="name"  
              type="text" 
              placeholder="Name">
        </input>
        {
          errors.name && touched.name &&  
          <span style={{ color:"red", fontWeight: "bold" }}>  
          {errors.name}      
          </span>  
        }

<select
        name="color"
        type="text"
        value={values.color}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
        <option value="" label="Select a color" />
        <option value="red" label="red" />
        <option value="blue" label="blue" />
        <option value="green" label="green" />
      </select>
      {errors.color && touched.color &&
        <span style={{ color:"red", fontWeight: "bold" }}> 
          {errors.color}
        </span>}

        <button type="submit" disabled={isSubmitting} >Submit</button>
      </form>
      )
    }

    </Formik>
 );
export default App;
