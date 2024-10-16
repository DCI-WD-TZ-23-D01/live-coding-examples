import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Content />
    </UserProvider>
  );
}

export default App;
