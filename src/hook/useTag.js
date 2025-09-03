import { useEffect, useState } from "react";
import TagsService from "../service/Tag";

export const useTag = () => {
  // creación de estados de la solicitud
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // llamado a la api
  const getTags = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await TagsService.getAllTags();
      setData(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  return { data, loading, error, getTags };
};
