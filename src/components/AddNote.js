import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';
const AddNote = (props) => {

    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})
   
    const handleClick= (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})// to display change write value={note} in form
        props.showAlert("Added Successfully", "success")
        
    }

    const onChange= async (e)=>{
        //making all the changes in name equal to value being written
        await setNote({...note, [e.target.name]: e.target.value})

    }
  return (
    <div>
      <div className="container my-3">
            <h2> Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="" className="form-control" minLength={5} required id="title"  value={note.title}  name="title" aria-describedby="emailHelp" onChange={onChange}/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" minLength={5} required id="description" value={note.description} name="description" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"></label>Tag
                    <input type="text" className="form-control" minLength={5} required id="tag" value={note.tag} name="tag" onChange={onChange}/>
                </div>
                
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    </div>
  )
}

export default AddNote
