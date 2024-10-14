import { useContext } from "react";
import "../styles/UserCard.css";
import { DarkmodeContext } from "../contexts/darkmodeContext";
import { UserContext } from "../contexts/userContext";

export const UserCard = ({ user }) => {
  // Diese Komponente liest nur den Zustand, hier muss nicht der Zustand geändert werden
  const { darkmode } = useContext(DarkmodeContext);
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser(user);
  };

  return (
    <div className={`user-container ${darkmode ? "dark" : ""}`}>
      <h1 onClick={handleClick}>{user.name}</h1>
      <p>@{user.username}</p>
      <a href={user.website}>{user.website}</a>
    </div>
  );
};
