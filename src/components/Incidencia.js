import { Link } from "react-router-dom";

export const Incidencia = ({ incidencia }) => {
  return (
    <article>
      <p>{incidencia.title}</p>

      {incidencia.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${incidencia.image}`}
          alt={incidencia.tittle}
        />
      ) : null}

      <p>
        Incidencia creada el{""}
        <Link to={`/incidencia/${incidencia.id}`}>
          {new Date(incidencia.created_at).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
