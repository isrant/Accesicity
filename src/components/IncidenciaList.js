import { Incidencia } from "./Incidencia";

export const IncidenciaList = ({ incidencias }) => {
  return incidencias.length ? (
    <ul>
      {incidencias.map((incidencia) => (
        <li key={incidencia.id}>
          <Incidencia incidencia={incidencia} />
        </li>
      ))}
    </ul>
  ) : (
    <p> todavía no hay incidencias...</p>
  );
};
