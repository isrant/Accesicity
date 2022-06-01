import { useEffect, useState } from "react";
import { getAllIssuesService } from "../services";

const useIssues = () => {
  const [issues, setIssues] = useState([]); //primer valor del estado y segunda funcion para actualizar el estado
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadIssues = async () => {
      try {
        setLoading(true);

        const data = await getAllIssuesService();

        setIssues(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadIssues();
  }, []);

  return { issues, loading, error };
};

export default useIssues;
