import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import Episodes from "../pages/Episodes/Episodes";
import Home from "../pages/Home/Home";
import SingleCharacter from "../pages/singleCharacter/SingleCharacter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/episodes",
        Component: Episodes,
      },
      {
        path: "/character/:id",
        Component: SingleCharacter,
      },
    ],
  },
]);

export default router;
