import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

import { NavWrap, NavLinks, NavLink, Img } from './NavbarElements';

import logo from '../../images/b-logo.jpg';

 const Navbar = (props) => {
  const navAuth = () => {
    const {user, handleLogout} = props.auth;
    if (user) {
      return (
        <NavLinks>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/profile'>Profile</NavLink>
         <NavLink to='/feed'>Feed</NavLink>
         <NavLink onClick={ () => handleLogout(props.history)} to='/'>Log Out</NavLink>
        </NavLinks>
      )
    } else {
     return (
       <NavLinks>
         <NavLink to='/login'>Log in</NavLink>
         <NavLink to='/register'>Sign Up</NavLink>
       </NavLinks>
     )
    }
  }

   return (
    <NavWrap>
      <div>
        <img src={logo} alt='coder logo' />
      </div>
      {navAuth()}
    </NavWrap>
  )
 }

 export const ConnectedNavbar = (props) => {
  return (
    <AuthConsumer>{(auth) => <Navbar {...props} auth={auth} />}</AuthConsumer>
  );
};
export default withRouter(ConnectedNavbar);