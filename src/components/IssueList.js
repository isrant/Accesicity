import { Issue } from "./Issue";

export const IssueList = ({ issues }) => {
  return issues.length ? (
    <ul>
      {issues.map((issue) => (
        <li key={issue.id}>
          <Issue issue={issue} />
        </li>
      ))}
    </ul>
  ) : (
    <p> todavía no hay incidencias...</p>
  );
};
