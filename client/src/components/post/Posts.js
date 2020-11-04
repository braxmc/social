import React, {useState, useEffect} from 'react';

import { PostConsumer } from '../../providers/PostProvider';

import Post from './Post'
import PostForm from './PostForm'


const Posts = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getPosts(props.auser_id)
  })
 
  return (
    <>

    </>
  )
}

const ConnectedPosts = (props) => (
  <PostConsumer>
    {
      value => (
        <Posts 
          {...props}
          {...value}
        />
      )
    }
  </PostConsumer>
)

export default ConnectedPosts;