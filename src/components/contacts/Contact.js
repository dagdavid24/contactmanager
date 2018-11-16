import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    message: 'Hello',
    showContactInfo: false
  };
  onShowClick = name => {
    console.log(this.state.message, name);
    // the code below can essentially be seen as an if statement like the comment
    // if (this.state.showContactInfo) {
    //   this.setState({ showContactInfo: false });
    // } else {
    //   this.setState({ showContactInfo: true });
    // }
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    console.log('deleted');
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {/* binding is done to make our custom function know which this we are refering to in the function itself */}
                {/* if you dont want binding you just have to make function an arrow function then all you have to do is this.onShowClick */}
                {name}{' '}
                <i
                  onClick={this.onShowClick.bind(this, name)}
                  className="fas fa-angle-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
