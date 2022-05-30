import { useEffect, useState } from "react";
import { getAllIncidenciasService } from "../services";

const useIncidencias = () => {
  const [incidencias, setIncidencias] = useState([]); //primer valor del estado y segunda funcion para actualizar el estado
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadIncidencias = async () => {
      try {
        setLoading(true);

        const data = await getAllIncidenciasService();

        setIncidencias(data);
      } catch (error) {
          setError(error.message);
      }finally{
          setLoading(false)
      }
    };

    loadIncidencias();

  }, []);

  return { incidencias, loading, error };
};

export default useIncidencias;
