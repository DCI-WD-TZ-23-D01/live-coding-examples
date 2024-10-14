import { useState } from "react";
import { DarkmodeContext } from "./contexts/darkmodeContext";
import Button from "./components/DarkmodeButton";
import { UserList } from "./components/UserList";
import { UserContext } from "./contexts/userContext";
import { Header } from "./components/Header";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Button />
        <UserList />
      </UserContext.Provider>
    </DarkmodeContext.Provider>
  );
}

export default App;
