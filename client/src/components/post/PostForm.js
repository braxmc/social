import React, {useState, useEffect} from 'react';

const PostForm = (props) => {
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')

  useEffect(() => {
    if (props.post) {
      setDescription(props.post.description)
      setFile(props.posts.file)
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
      props.updatePost(props.post.id, {description: description, file: file})
      props.toggleEdit()
    } else {
      props.addPost({description: description, file: file})
      props.toggle()
    }
  }

  return (
    <>
      <form>
        {/* <DropDiv>
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
          </DropDiv> */}
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

export default PostForm;