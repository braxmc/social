import React from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

import Posts from '../post/Posts';

const Profile = (props) => {

  return (
    <>
      user_id:{props.auth.user.id}
      <Posts user_id={props.auth.user.id} />
    </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth =>
      <Profile {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;