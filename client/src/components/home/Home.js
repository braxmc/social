import React from 'react';

import { Link } from 'react-router-dom';

import { HomeWrap, Header, Header2, HomeContent, ButtonWrap, Button } from './HomeElements';

const Home = () => (
  <HomeWrap>
      <HomeContent>
        <h1>Coder</h1>
        <h2>Connect with software engineers around the world.</h2>
      </HomeContent>
      <ButtonWrap>
        <Link to='/login'>
        <Button>Sign In</Button>
        </Link>
        <Link to='/register'>
          <Button>Sign Up</Button>
        </Link>
      </ButtonWrap>
  </HomeWrap>
)

export default Home;