import * as notesAPI from './notes-api';


export async function fetchAllNotes() {
    try {
      const notes = await notesAPI.getAllNotes(); // Use notesAPI functions
      return notes;
    } catch (error) {
      throw error;
    }
  }
  
  export async function addNewNote(noteData) {
    try {
      const newNote = await notesAPI.createNote(noteData); // Use notesAPI functions
      return newNote;
    } catch (error) {
      throw error;
    }
  }