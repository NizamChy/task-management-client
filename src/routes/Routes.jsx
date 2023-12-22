import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorPage/ErrorPage";
import NewTask from "../pages/newTask/NewTask";
import PrevTask from "../pages/prevTask/PrevTask";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/newtask",
        element: <PrivateRoute><NewTask></NewTask></PrivateRoute>,
      },
      {
        path: "/previoustask",
        element: <PrivateRoute><PrevTask></PrevTask></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
