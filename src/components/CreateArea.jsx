import React from "react";
import Add from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

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

  // Polish the app - expand inputs only on focus
  // state: rows, showTitle
  const [rows, setRows] = React.useState(1);
  function handleTitleFocus() {
    setRows(3)
  }

  return (
    <div>
      <form onSubmit={event => event.preventDefault()} className="create-note">
        {rows == 3 && <input onChange={captureNote} name="title" placeholder="Title" value={title} />}
        <textarea onClick={handleTitleFocus} onChange={captureNote} name="content" placeholder="Take a note..." rows={rows} value={content} />
        {rows == 3 &&
          <Zoom in={true}>
          <Fab onClick={(event) => {
            props.createNewNote({title, content}, event);
            setNote({title: "", content: ""});
          }}>
            <Add />
          </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
