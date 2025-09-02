import { useEffect, useState } from "react";
import NotesService from "../service/Note";

export const useNote = () => {
    // creación de estados de la solicitud
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // llamado a la api
    const getNotes = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await NotesService.getAllNotes();
            setData(res);
        }catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {   
        getNotes();
    }, []);

    return { data, loading, error, getNotes };
}