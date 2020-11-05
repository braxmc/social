import React, { useState} from 'react';
import axios from 'axios';

export const PostContext = React.createContext();

export const PostConsumer = PostContext.Consumer;

const PostProvider = ({children}) => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState()
 
  const getPosts = () => {
    axios.get('/api/posts')
    .then( res => {
      setPosts( res.data )
    })
    .catch(err => console.log(err))
  }

  const addPost = (post) => {
    axios.post('/api/posts', {post})
    .then( res => {
      setPosts([...posts, res.data])
    })
    .catch(err => console.log(err))
  }

  const updatePost = (id, post) => {
    axios.put(`/api/posts/${id}`, {post})
    .then( res => {
      setPost(res.data)
    })
    .catch(err => console.log(err))
  }

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then( res => {
      setPosts(posts.filter(p => p.id !== id))
      window.location.href='/rooms'
    })
    .catch(err => console.log(err))
  }

  return (
    <PostContext.Provider value={{
      posts: posts,
      post: post,
      getPosts: getPosts,
      addPost: addPost,
      updatePost: updatePost,
      deletePost: deletePost
    }}>
      { children }
    </PostContext.Provider>
  )
}

export default PostProvider;
