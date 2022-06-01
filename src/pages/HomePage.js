import { ErrorMessage } from "../components/ErrorMessage";
import { IssueList } from "../components/IssueList";
import useIssues from "../hooks/useIssues";

export const Homepage = () => {
  const { issues, loading, error } = useIssues();

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <ErrorMessage message={error} />;
  console.log(issues);
  return (
    <section>
      <h1>INCIDENCIAS</h1>

      <IssueList issues={issues} />
    </section>
  );
};
