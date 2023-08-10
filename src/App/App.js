// import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import "./App.scss";
import Login from "../pages/login/Login";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Leftbar from "../components/Leftbar/Leftbar";
import Rightbar from "../components/Rightbar/Rightbar";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import "../style.scss";
import { DarkModeContex } from "../contex/darkModeContex";
import { AuthContex } from "../contex/authContext";

const App = () => {
  const { currentUser } = useContext(AuthContex);

  const { darkMode } = useContext(DarkModeContex);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div className="main">
          <Leftbar />

          <div className="main_content">
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
