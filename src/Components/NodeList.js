import React, { useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';  
import { nanoid } from 'nanoid';

const NodeList = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (text) => {
    try {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  const deleteNote = (id) => {
    try {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={deleteNote}
        />
      ))}
      <AddNote handleAddNote={addNote} />
    </div>
  );
};

export default NodeList;
