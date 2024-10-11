import React, { useState } from "react";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExapnded,setExapnded]= useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  function exapnd(){
    setExapnded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExapnded &&( 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          />)}

        <textarea
          name="content"
          onClick={exapnd}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExapnded ? 2 : 1}
        />
        <Zoom in={isExapnded}>
            <Fab onClick={submitNote}> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
