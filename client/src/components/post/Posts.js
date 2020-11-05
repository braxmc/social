import React, {useState, useEffect} from 'react';

import { PostConsumer } from '../../providers/PostProvider';

import Post from './Post'
import PostForm from './PostForm'


const Posts = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    // props.getPosts()
  }, [])

  const listPosts = () => {
    // if (props.posts.length !== 0) {
    //   return (
    //     <ul>
    //       { props.posts.map( p =>
    //         <Post {...p} />  
    //       )}
    //     </ul>
    //   )
    // } else {
    //   return (<h1>No Posts</h1>)
    // }
  }
 
  return (
    <>
      <button onClick={() => setToggleForm(!toggleForm)}>
         {toggleForm ? 'Exit' : 'Add Post'} 
      </button>
      {
        toggleForm ?
        <PostForm addPost={props.addPost} toggleForm={setToggleForm} />
        :
        <></>
      }
      {listPosts()}
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