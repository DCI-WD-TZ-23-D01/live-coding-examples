import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const WelcomeMessage = () => {
  const { username } = useContext(UserContext);
  return <p>Welcome {username}</p>;
};
