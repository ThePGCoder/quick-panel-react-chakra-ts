import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import About from "./pages/about";
import DashLayout from "./layout/dash";
import Profile from "./pages/profile";
import Income from "./pages/charts/income";
import AuthLayout from "./layout/auth";
import Landing from "./pages/auth/landing";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Frameworks from "./pages/charts/frameworks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <DashLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/income", element: <Income /> },
      { path: "/frameworks", element: <Frameworks /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
