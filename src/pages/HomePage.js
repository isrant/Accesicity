import { ErrorMessage } from "../components/ErrorMessage";
import { IncidenciaList } from "../components/IncidenciaList";
import useIncidencias from "../hooks/useIncidencias";

export const Homepage = () => {
  const { incidencias, loading, error } = useIncidencias();

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>INCIDENCIAS</h1>

      <IncidenciaList incidencias={incidencias} />
    </section>
  );
};
