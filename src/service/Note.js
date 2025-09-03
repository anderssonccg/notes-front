import axios from "axios";

async function getAllNotes(filters = {}) {
  try {
    const res = await axios({
      url: "https://notes-api-a3h5.onrender.com/api/v1/notes/",
      method: "GET",
      headers: { "Content-Type": "application/json" },
      params: filters, 
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}


async function updateNote(id, note) {
  try {
    const res = await axios({
      url: `https://notes-api-a3h5.onrender.com/api/v1/notes/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: note,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function deleteNote(id) {
  try {
    const res = await axios({
      url: `https://notes-api-a3h5.onrender.com/api/v1/notes/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

const NotesService = {
  getAllNotes,
  updateNote,
  deleteNote,
};

export default NotesService;
