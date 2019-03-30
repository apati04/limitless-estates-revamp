import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

class BasicPage extends Component {
  render() {
    return (
      <div>
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component={TextField}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="lastName"
            component={TextField}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
    );
  }
}

export default BasicPage;
