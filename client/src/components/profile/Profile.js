import React, {useState, useEffect} from 'react';
import {AuthConsumer} from '../../providers/AuthProvider'
import Dropzone from 'react-dropzone'

const Profile = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState('')

  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    const { auth: { user: { first_name, last_name, email, }, }, } = props;
    setFirstName(first_name)
    setLastName(last_name)
    setEmail(email)
  }, [props.auth.user])

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.auth.updateUser(props.auth.user.id, { firstName, lastName, email, file })
    setToggleEdit(!toggleEdit)
    setFirstName('')
    setLastName('')
    setEmail('')
  }
  
  const profileView = () => {
    const {auth: { user }, } = props;
    return (
      <>
        <p>user ID: {props.auth.user.id}</p>
        <p>
          {props.auth.user.first_name}, {props.auth.user.last_name}
        </p>
      </>
    )
  }

  const editView = () => {
    const {auth: { user } } = props;
    
    return (
      <form onSubmit={handleSubmit} toggleEdit={setToggleEdit}>
        <input 
          label='First Name'
          name='firstName'
          value={firstName}
          required
          onChange={handleFirstNameChange}
        />
        <input 
          label='Last Name'
          name='lastName'
          value={lastName}
          required
          onChange={handleLastNameChange}
        />
        <input 
          label='Email'
          name='email'
          value={email}
          required
          onChange={handleEmailChange}
        />
        <button type='submit'>update</button>
      </form>
    )
  }



  return (
    <>
      {toggleEdit ? editView() : profileView()}
  <button className='profile-button' onClick={() => setToggleEdit(!toggleEdit)}>
    {toggleEdit ? 'Exit' : 'Edit'}
  </button>
    </>
  )
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}



const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;