import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Incidencia } from "../components/Incidencia";
import useIncidencia from "../hooks/useIncidencia";

export const IncidenciaPage = () => {
  const { id } = useParams();

  const { incidencia, loading, error } = useIncidencia(id);

  if (loading) return <p>cargando incidencia...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>INCIDENCIA</h1>
      <Incidencia incidencia={incidencia} />
    </section>
  );
};
