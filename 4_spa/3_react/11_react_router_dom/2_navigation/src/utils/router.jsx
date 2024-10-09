import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";
import { User } from "../pages/private/User";
import { Settings } from "../pages/private/Settings";
import { PrivateLayout } from "../components/PrivateLayout";
import { Error } from "../pages/Error";

/**
 * 1) Importiere die createBrowserRouter Funktion
 * 2) Erstelle ein Array für die Funktion
 * 3) Erstellen Routen-Objekte im Array
 *      - path
 *      - element
 *      - (optional) index
 *      - (optional) children
 *
 *
 *
 */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/private",
    // Dieses Element besitzt ein <Outlet />, ist im components-Ordner zu finden
    element: <PrivateLayout />,
    children: [
      {
        index: true, // Parent-Path
        element: <User />,
      },
      {
        path: "user", // das "/" wird automatisch von react-router-dom erstellt
        element: <User />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />, // <Navigate /> navigiert automatisch zur nächsten Seite, wenn die Komponenten gerendert
  },
]);
