import { Incidencias } from "./incidencias";

export const IncidenciasList = ({ incidencias }) => {
  return incidencias.length ? (
    <ul>
      {incidencias.map((incidencias) => (
        <li key={incidencias.id}>
          <Incidencias incidencias={incidencias} />
        </li>
      ))}
    </ul>
  ) : (
    <p> todavía no hay incidencias...</p>
  );
};
