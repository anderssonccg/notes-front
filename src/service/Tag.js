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

async function createTag(tag) {
  try {
    const payload = {
      tagName: tag,         
      description: "nuevo",
    };

    console.log("📤 Enviando TAG:", payload);

    const res = await axios({
      url: "https://notes-api-a3h5.onrender.com/api/v1/tags/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload, 
    });

    return res.data;
  } catch (error) {
    console.error("❌ Error en createTag:", error.response?.data || error.message);
    throw error;
  }
}

const TagsService = {
  getAllTags,
  createTag
};

export default TagsService;
