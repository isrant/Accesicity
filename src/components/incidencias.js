import { Link } from "react-router-dom";

export const Incidencias = ({ incidencias }) => {
  return (
    <article>
      <p>{incidencias.title}</p>

      {incidencias.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${incidencias.image}`}
          alt={incidencias.tittle}
        />
      ) : null}

      <p>
        Incidencia creada el{""}
        <Link to={`/incidencias/${incidencias.id}`}>
          {new Date(incidencias.created_at).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
