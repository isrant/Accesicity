import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexto/AuthContext";
import { updateIssueService } from "../services";

export const Issue = ({ issue, updateIssueStatus }) => {
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const updateIssue = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const status = form.get("status");

    try {
      const updatedIssue = await updateIssueService({
        id: issue.id,
        token,
        status,
      });

      updateIssueStatus(issue.id, updatedIssue);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <article>
      <span>Ciudad: {issue.city} </span>
      <span>Barrio: {issue.hood} </span>
      <span>Progreso de la incidencia: {issue.status}</span>
      <p>Título: {issue.title}</p>
      <p>Descripción: {issue.description}</p>

      {issue.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${issue.image}`}
          alt={issue.tittle}
        />
      ) : null}

      <p>
        Problema de accesibilidad registrado el{" "}
        <Link to={`/issue/${issue.id}`}>
          {new Date(issue.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === 1 ? (
        <section>
          <form id="issue-status" onSubmit={updateIssue}>
            <fieldset>
              <legend>Actualizar progreso de la incidencia</legend>
              <label htmlFor="pendiente">pendiente</label>
              <input
                type="radio"
                id="pendiente"
                name="status"
                value="pendiente"
                defaultChecked={issue.status === "pendiente"}
              />
              <label htmlFor="resuelto">resuelto</label>
              <input
                type="radio"
                id="resuelto"
                name="status"
                value="resuelto"
                defaultChecked={issue.status === "resuelto"}
              />
              {/* <button type="submit">Actualizar</button> */}
              <button type="submit">
                Actualizar estado incidencia de accesibilidad
              </button>
            </fieldset>
          </form>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
