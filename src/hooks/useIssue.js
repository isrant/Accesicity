import { useEffect, useState } from "react";
import { getSingleIssueService } from "../services";

const useIssue = (id) => {
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadIssue = async () => {
      try {
        setLoading(true);

        const data = await getSingleIssueService(id);

        setIssue(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadIssue();
  }, [id]);

  return { issue, loading, error };
};

export default useIssue;
