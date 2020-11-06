import React, {useState, useEffect} from 'react';

import Dropzone from 'react-dropzone'

const PostForm = (props) => {
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')

  useEffect(() => {
    if (props.post) {
      setDescription(props.post.description)
      setFile(props.post.file)
    }
  }, [])

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleFileChange = (e) => {
    setFile(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.post) {
      props.updatePost(props.post.id, {description, file})
      props.toggleEdit(false)
    } else {
      props.addPost(props.user_id, {description, file})
      props.toggle(false)
    }
  }

  const onDrop = (files) => {
    setFile(files[0])
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
            <Dropzone
              onDrop={onDrop}
              multiple={false}
              onChange={handleFileChange}
            >
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    style={styles.dropzone}
                  >
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop files here...</p> :
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    }
                  </div>
                )
              }}
            </Dropzone>
          </div>
        <input 
        label='description'
        placeholder='Write post...'
        name='description'
        value={description}
        onChange={handleDescriptionChange}
        />
        <button type='submit'>submit</button>
      </form>
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


export default PostForm;