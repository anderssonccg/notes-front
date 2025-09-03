import { useEffect, useState } from "react";
import NotesService from "../service/Note";

export const useNote = (filters = {}) => {
  // creación de estados de la solicitud
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // llamado a la api
  const getNotes = async (filters = {}) => {
    setLoading(true);
    setError("");
    try {
      const res = await NotesService.getAllNotes(filters);
      setData(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateNote = async (id, updatedData) => {
    try {
      await NotesService.updateNote(id, updatedData);
      await getNotes();
    } catch (error) {
      setError(error.message);
    }
  };

  const createNote = async (noteData) => {
    try {
      setLoading(true); const newNote = await NotesService.createNote(noteData);
      setData((prev) => [...prev, newNote]);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return { data, loading, error, getNotes, updateNote, createNote };
};
