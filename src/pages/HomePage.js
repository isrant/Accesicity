import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { IssueList } from "../components/IssueList";
import { NewIssue } from "../components/NewIssue";
import { AuthContext } from "../contexto/AuthContext";
import useIssues from "../hooks/useIssues";

export const Homepage = () => {
  const { issues, loading, error } = useIssues();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>INCIDENCIAS</h1>

{user ? <NewIssue />:null }

      <IssueList issues={issues} />
    </section>
  );
};
