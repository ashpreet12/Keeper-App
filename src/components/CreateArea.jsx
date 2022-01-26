import React, {useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
function CreateArea(props) {

  const [isClicked,setIsClicked] = useState(false);
  const [currNote, setCurrNote] = useState({
    title : "",
    content : ""
  });

  function handleChange(event){
    const {value,name} = event.target;
    setCurrNote(prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })
    
  }
  function submitNote(event){
    props.toAdd(currNote);
    setCurrNote({
      title : "",
      content : ""
    })
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        {isClicked && <input onChange={handleChange} name="title" placeholder="Title" value={currNote.title}/>}
        <textarea 
        onClick={()=>{
          setIsClicked(true);
        }}
         onChange={handleChange} 
         rows = {isClicked ? "3" : "1"}
         name = "content" 
         placeholder="Take a note..."  
         value = {currNote.content}

         />

        <Zoom in = {isClicked ? true : false}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
