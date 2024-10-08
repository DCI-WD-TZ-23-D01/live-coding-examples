import { Link, Outlet, NavLink } from "react-router-dom";
import "./Dog.css";

export const Dog = () => {
  return (
    <main>
      <h1>Dog</h1>
      <Link to="info">Info</Link>
      {/* NavLink bietet die Möglichkeit das className eine Funktion erhält */}
      {/* Wenn NavLink erkennt, dass der Browser  */}
      <NavLink
        to="info"
        // className={(props) => (props.isActive ? "active" : "")}
      >
        Info
      </NavLink>
      <Outlet />
    </main>
  );
};
