import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Segment } from 'semantic-ui-react';


class Register extends React.Component {
  state = { firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;
    if (password === passwordConfirmation)
      handleRegister({ first_name: firstName, last_name: lastName, email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, firstName, lastName } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
            <input
                label="First Name"
                required
                autoFocus
                name='firstName'
                value={firstName}
                placeholder='First Name'
                onChange={this.handleChange}
              />
              <label>Last Name</label>
              <input
                label="lastName"
                required
                autoFocus
                name='lastName'
                value={lastName}
                placeholder='Last Name'
                onChange={this.handleChange}
              />
              <label>Email</label>
              <input
                label="Email"
                required
                autoFocus
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
              <label>Password</label>
              <input
                Label="Password"
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
              <label>Password Confirmation</label>
              <input
                label="Password Confirmation"
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                placeholder='Password Confirmation'
                type='password'
                onChange={this.handleChange}
              />
            <div>
            <button primary type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
