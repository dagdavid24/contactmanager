import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;

    //check for errors
    if (name === '') {
      this.setState({
        errors: 'Name is required'
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: 'Phone is required'
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: 'Email is required'
      });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    //clear state after submission
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">ADD CONTACT</div>
              <div className="card-body">
                <form
                  action=""
                  onSubmit={this.handleSubmit.bind(this, dispatch)}
                >
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    handleChange={this.handleChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    handleChange={this.handleChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone..."
                    value={phone}
                    handleChange={this.handleChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    className="btn btn-light btn-block"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
