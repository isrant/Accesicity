import { useState } from "react";

export const NewIssue = () => {
  const [error, setError] = useState("");
  const { enviando, setEnviando } = useState(false);

  const handleForm = async (e) => {
    e.preventDeFault();

    try {
      setEnviando(true);

      const data=new FormData(e.target);
    } catch (error) {
      setError(error.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h1> Añade una nueva incidencia</h1>

      <fieldset>
        <label htmlFor="text">Título</label>
        <input type="text" id="title" name="title" required />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Descripción</label>
        <input type="text" id="description" name="description" required />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Ciudad</label>
        <input type="text" id="city" name="city" required />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Barrio</label>
        <input type="text" id="text" name="text" required />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Barrio</label>
        <input type="text" id="hood" name="hood" required />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Imagen (Opcional)</label>
        <input type="file" id="image" name="image" />
      </fieldset>

      <button>Enviar Incidencia</button>
      {enviando ? <p>Enviando incidencia</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
