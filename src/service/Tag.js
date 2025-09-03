import axios from "axios";

async function getAllTags() {
  try {
    const res = await axios({
      url: "https://notes-api-a3h5.onrender.com/api/v1/tags/",
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

const TagsService = {
  getAllTags,
};

export default TagsService;
