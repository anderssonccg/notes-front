import axios from "axios";

async function getAllNotes() {
    try {
        const res = await axios({
            url: "https://notes-api-a3h5.onrender.com/api/v1/notes/",
            method: "GET",
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
};

export default NotesService;