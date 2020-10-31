import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

import NavbarElements from './NavbarElements';

 const Navbar = (props) => {
  const navAuth = () => {
    const {user, handleLogout} = props.auth;
    if (user) {
      return (
        <>
         <Link to='/'>Home</Link>
         <Link to='/'>Profile</Link>
         <Link to='/'>Feed</Link>
         <Link onClick={ () => handleLogout(props.history)} to='/'>Log Out</Link>
        </>
      )
    } else {
     return (
       <>
         <Link to='/login'>Log in</Link>
         <Link to='/register'>Sign Up</Link>
       </>
     )
    }
  }

   return (
    <div className="navContainer">
        <div className='leftWrap'>
        </div>
      {navAuth()}
    </div>
  )
 }

 export const ConnectedNavbar = (props) => {
  return (
    <AuthConsumer>{(auth) => <Navbar {...props} auth={auth} />}</AuthConsumer>
  );
};
export default withRouter(ConnectedNavbar);