import { v4 as uuidv4 } from "uuid";

const notesAppController = () => {
  const notes = ref([]);

  const addNote = ({ title, description }) => {
    const newID = uuidv4();

    const newNote = {
      title: title ? title : "",
      description,
      id: newID,
    };

    notes.value.push(newNote);
  };

  const deleteNote = (id) => {
    notes.value = notes.value.filter((el) => el.id !== id);
  };

  return {
    notes,
    addNote,
    deleteNote,
  };
};

const notesApp = notesAppController();

export default notesApp;
