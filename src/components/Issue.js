import { Link } from "react-router-dom";

export const Issue = ({ issue }) => {
  return (
    <article>
      <p>{issue.title}</p>

      {issue.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/upload/${issue.image}`}
          alt={issue.tittle}
        />
      ) : null}

      <p>
        Incidencia creada el{""}
        <Link to={`/issue/${issue.id}`}>
          {new Date(issue.created_at).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
