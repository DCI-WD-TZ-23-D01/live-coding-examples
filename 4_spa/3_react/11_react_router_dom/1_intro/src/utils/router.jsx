import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../../2_navigation/src/pages/Home";
import { Dog } from "../pages/Dog";
import { DogInfo } from "../pages/dog/DogInfo";

/**
 *  Routen Objekt
 *  path: Wie die Seite erreicht wird
 *  element: Welche React Komponente wird dargestellt
 *  children: Weiter Subseiten der Hauptseite
 *     z.B. /dashboard => /dashboard/calendar
 */

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dog",
    element: <Dog />,
    children: [{ path: "info", element: <DogInfo /> }],
  },
]);
