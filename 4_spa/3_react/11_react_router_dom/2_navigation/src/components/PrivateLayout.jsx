import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <>
      <header>Private Area</header>
      <Outlet />
    </>
  );
};
