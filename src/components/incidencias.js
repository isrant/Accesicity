export const Incidencias = ({ incidencias }) => {
  return (
    <article>
      <p>{incidencias.title}</p>

      {incidencias.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${incidencias.image}`} alt={incidencias.tittle}
        />
      ) : null}

      <p>Creado el {new Date(incidencias.created_at).toLocaleString()}</p>
    </article>
  );
};
