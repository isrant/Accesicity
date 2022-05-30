import { useEffect, useState } from "react";
import { getSingleIncidenciaService } from "../services";

const useIncidencia = (id) => {
  const [incidencia, setIncidencia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadIncidencia = async () => {
      try {
        setLoading(true);

        const data = await getSingleIncidenciaService(id);

        setIncidencia(data);
      } catch (error) {
setError(error.message);
      } finally {
setLoading(false);
      }
    }

    loadIncidencia();
  },[id])

  return { incidencia, loading, error };
};

export default useIncidencia;
