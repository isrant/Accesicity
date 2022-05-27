import useIncidencias from "../hooks/useIncidencias";

export const Homepage = () => {
  const { incidencias, loading, error } = useIncidencias();

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <p>{error}</p>; 

  console.log(incidencias);

  return (
    <section>
      <h1>INCIDENCIAS</h1>
      <p> aquí iran las incidencias de accesibilidad</p>
    </section>
  );
};
