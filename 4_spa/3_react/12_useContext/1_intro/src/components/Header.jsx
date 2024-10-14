import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const Header = () => {
  const { user } = useContext(UserContext);

  return user && <p>Current User: {user.username}</p>;
};
