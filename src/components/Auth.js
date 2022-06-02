import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexto/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <p>
      el usuario está conectado como {user.email}{" "}
      <button onClick={() => logout()}>Desconectarse</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>{" "}
      </li>
      <li>
        <Link to="/logOut">Desconectarse</Link>{" "}
      </li>
    </ul>
  );
};
