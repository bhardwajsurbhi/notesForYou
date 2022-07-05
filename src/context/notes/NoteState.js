
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {

 // const host = "http://localhost:5000"
  const notesInitial = [] 
  const [notes, setNotes] = useState(notesInitial)



    //Get all Notes
    const getNotes = async ()=>{
      
       //API Call
   // const response = await fetch(`${host}/api/notes/fetchallnotes` , {
    const response = await fetch(`/api/notes/fetchallnotes` , {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token"  : localStorage.getItem('token')
        
      }
    });
    const json = await response.json()
    
     
      setNotes(json)
   
  }


    //Add a Note
    const addNote = async (title, description,  tag)=>{
        //TODO: API call

        
         //API Call
      //const response = await fetch(`${host}/api/notes/addnote` , {
      const response = await fetch(`/api/notes/addnote` , {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token"  : localStorage.getItem('token')
          
        },
        
        body: JSON.stringify({title, description , tag}) 
      });

      const note = await response.json();
      setNotes(notes.concat(note))
      
        //concat returns an array whereas push updates an array
    }

    //Delete a Note
    const deleteNote = async (id)=>{

       //API Call
      // const response = await fetch(`${host}/api/notes/deletenote/${id}` , {
       const response = await fetch(`/api/notes/deletenote/${id}` , {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token"  : localStorage.getItem('token')
          
        },
      });
      const json = response.json;
      console.log(json);
      
      
      
       const newNotes = notes.filter((note)=>{return note._id!==id})
       setNotes(newNotes) 
    }

    //Edit a Note
    const editNote = async (id, title, description, tag)=>{
      
      //API Call
     // const response = await fetch(`${host}/api/notes/updatenote/${id}` , {
      const response = await fetch(`/api/notes/updatenote/${id}` , {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token"  : localStorage.getItem('token')
          
        },
        
        body: JSON.stringify({title, description , tag}) 
      });
      const json = await response.json();
      console.log(json)
      
      
      // stringifying array into string and then parsing it to create a deep copy
      let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      //for loop as notes object is in array form, whisch has four values at four indexes
      for(let index = 0; index < newNotes.length ; index++){
        const element = newNotes[index];
        if(element._id === id){
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
        

      }
      setNotes(newNotes);
        
    }

    
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;