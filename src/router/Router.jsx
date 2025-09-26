import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Navigate } from "react-router";
import Home from "../pages/Home";
import Nav from "../componetn/Nav";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
