import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./Pages/HomePage";
import ChatWithAstro from "./Pages/ChatWithAstro";
import KundliMatching from "./Pages/KundliMatching";
import Horoscope from "./Pages/Horoscope";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "horoscope",
        element: <Horoscope />,
      },
      {
        path: "chat-with-astrologer",
        element: <ChatWithAstro />,
      },
      {
        path: "kundli-matching",
        element: <KundliMatching />,
      },
    ],
  },
]);

export default router;
