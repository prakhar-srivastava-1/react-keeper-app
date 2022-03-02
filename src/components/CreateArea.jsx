import React from "react";

function CreateArea(props) {

  const [{title, content}, setNote] = React.useState({
    title: "",
    content: ""
  });

  function captureNote(event) {
    const {value, name} = event.target;
    setNote(prevValue => {
      return {...prevValue, [name]:value}
    });

  }

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <input onChange={captureNote} name="title" placeholder="Title" value={title} />
        <textarea onChange={captureNote} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button onClick={(event) => {
          props.createNewNote({title, content}, event);
          setNote({title: "", content: ""});
        }}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
