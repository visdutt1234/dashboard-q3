import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateApplication from "./pages/CreateApplication/CreateApplication";
import "../styles.scss";
import Audits from "./pages/Audits";
import UserManagement from "./pages/UserManagement";
import Reports from "./pages/Reports";
import Error from "./pages/Error";
// npm run build --reset-cache

const AppLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/create",
        element: <CreateApplication />,
      },
      {
        path: "/audits",
        element: <Audits/>,
      },
      {
        path: "/user-management",
        element: <UserManagement/>,
      },
      {
        path: "/reports",
        element: <Reports/>,
      },
      {
        path: "/create",
        element: <CreateApplication />,
      },
      {
        path: "client-management",
        element: <CreateApplication />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
