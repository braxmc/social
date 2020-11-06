import React, {useState, useEffect} from 'react';

import { PostConsumer } from '../../providers/PostProvider';

import PostForm from './PostForm';

const Post = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    props.getPosts(props.id)
  }, [])

  const editView = () => {
    return (
      <>
        <PostForm 
          {...props}
          toggleEdit={setToggleEdit}
        />
      </>
    )
  }

  if (!props.posts) return null
  return (
    <>
      <ul>
        {toggleEdit ? editView() :
          <div>
            {props.post.description}
          </div>
        }
        <button onClick={() => setToggleEdit(!toggleEdit)}>
          {toggleEdit ? 'close' : 'edit'}
        </button>
        <button onClick={() => props.deletePost(props.id)}>Delete</button>
      </ul>
    </>
  )
}

const ConnectedPostPage = (props) => (
  <PostConsumer>
    {
      value => (
        <Post 
          {...props}
          {...value}
        />
      )
    }
  </PostConsumer>
)

export default ConnectedPostPage;