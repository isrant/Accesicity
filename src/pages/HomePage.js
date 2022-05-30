import { ErrorMessage } from "../components/ErrorMessage";
import { IncidenciasList } from "../components/IncidenciasList";
import useIncidencias from "../hooks/useIncidencias";

export const Homepage = () => {
  const { incidencias, loading, error } = useIncidencias();

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <ErrorMessage message={error}/>; 

  console.log(incidencias);

  return (
    <section>
      <h1>INCIDENCIAS</h1>
      <IncidenciasList incidencias={incidencias}/>
    </section>
  );
};
