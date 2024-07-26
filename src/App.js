import { useEffect, useState } from 'react';
import './App.css';
import NodeList from './Components/NodeList';
import { nanoid } from 'nanoid'
import Search from './Components/Search';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is My First note",
      date: '08/11/2015'
    },
    {
      id: nanoid(),
      text: "this is My Second note",
      date: '05/12/2022'
    },
    {
      id: nanoid(),
      text: "this is My Third note",
      date: '15/08/2018'
    },
    {
      id: nanoid(),
      text: "this is My Fourth note",
      date: '15/09/2021'
    },
    {
      id: nanoid(),
      text: "this is My Fifth note",
      date: '15/02/2019'
    },
    {
      id: nanoid(),
      text: "this is My Six note",
      date: '25/05/2023'
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleSearchNote = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="Container">
        <Navbar />
        <Header handleToggleMode={setDarkMode} />
        <Search handleSearchNote={handleSearchNote} />
        <NodeList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
