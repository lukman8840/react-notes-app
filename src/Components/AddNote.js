import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    const { value } = event.target;
    if (characterLimit - value.length >= 0) {
      setNoteText(value);
    }
  };

  const handleSave = () => {
    const sanitizedText = noteText.replace(/<\/?[^>]+(>|$)/g, ""); // Simple XSS prevention
    if (sanitizedText.trim().length > 0) {
      handleAddNote(sanitizedText);
      setNoteText('');
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="Type to add a note"
        onChange={handleChange}
        aria-label="Note text area"
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button
          className="save"
          onClick={handleSave}
          disabled={noteText.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
