import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "signin",
        element: <SigninPage />,
      },
    ],
  },
]);

export default routes;