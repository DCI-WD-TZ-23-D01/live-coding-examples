import { createContext, useState } from "react";

// ! Wenn in einer Datei JSX vorkommt, dann muss eine .jsx Dateiendung vorkommen

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
