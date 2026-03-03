import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import Episodes from "../pages/Episodes/Episodes";
import Home from "../pages/Home/Home";
import SingleCharacter from "../pages/singleCharacter/SingleCharacter";
import SingleEpisode from "../pages/SingleEpisode/SingleEpisode";

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
      {
        path: "/episode/:id",
        Component: SingleEpisode,
      },
    ],
  },
]);

export default router;
