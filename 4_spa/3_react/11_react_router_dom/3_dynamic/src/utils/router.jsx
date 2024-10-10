import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dog } from "../pages/Dog";

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    path: "/dog/:breed",
    element: <Dog />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
