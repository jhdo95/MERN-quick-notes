import Note from '../../components/Note/Note';
import { useState, useEffect } from 'react';
import { fetchAllNotes, addNewNote } from '../../utilities/notes-service';


export default function NotePage() {
    const [notes, setNotes] = useState([]);
    const [newNoteText, setNewNoteText] = useState('');
  
    useEffect(() => {
      async function fetchData() {
        try {
          const fetchedNotes = await fetchAllNotes();
          setNotes(fetchedNotes);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);


    const handleAddNote = async () => {
        try {
          const newNoteData = { text: newNoteText };
          const newNote = await addNewNote(newNoteData);

          console.log('New Note:', newNote);
          
          setNotes([newNote, ...notes]);
          setNewNoteText(''); 
        } catch (error) {
          console.error(error);
        }
      }
  
    return (
        <div className="notes-page">
        <h1>My Notes</h1>
        <div>
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter your note"
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
          />
          <button onClick={handleAddNote}>Add Note</button>
        </div>
        {notes.length === 0 ? (
          <p>No notes yet!</p>
        ) : (
          <ul>
            {notes.map((note) => (
              <li key={note._id}>
                <p>{note.text}</p>
                <p>Created At: {new Date(note.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }