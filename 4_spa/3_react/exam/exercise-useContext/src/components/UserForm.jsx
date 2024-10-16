import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const UserForm = () => {
  const { username, setUsername } = useContext(UserContext);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <input type="text" onChange={handleChange} value={username} />
    </form>
  );
};
