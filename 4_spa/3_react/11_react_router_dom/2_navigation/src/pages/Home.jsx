import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
  // JS Bereich
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  if (count === 5) {
    navigate("/contacts");
  }

  return (
    // JSX
    <main>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      {/* Wenn , dann render */}
      {/* {count === 5 && <Navigate to="/contacts" />} */}
      <p>Hello Home</p>
    </main>
  );
};
