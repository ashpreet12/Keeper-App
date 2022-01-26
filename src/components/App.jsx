import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes,setNotes] = useState([]);

  function addNote(note){
   
    setNotes(prevNotes => {
      return ([...prevNotes, note]);
    })
  }

  function deleteNote(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((val,idx) => {
        return idx !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea 
        toAdd = {addNote}
      />
      {notes.map((val,idx) => {
        return <Note key = {idx} id = {idx} title = {val.title} content = {val.content} toDelete = {deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
