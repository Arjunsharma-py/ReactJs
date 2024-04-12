import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Root from "./Root.tsx";
import "./index.css";
import { store } from "./store.ts";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import Contact from "./components/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
