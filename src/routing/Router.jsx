import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import Episodes from "../pages/Episodes/Episodes";
import Home from "../pages/Home/Home";
import Location from "../pages/Locations/Location";
import SingleCharacter from "../pages/singleCharacter/SingleCharacter";
import SingleEpisode from "../pages/SingleEpisode/SingleEpisode";
import SingleLocation from "../pages/SingleLocation/SingleLocation";
import NotFound from "../pages/NotFound/NotFound";

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
      {
        path: "/locations",
        Component: Location,
      },
      {
        path: "/location/:id",
        Component: SingleLocation,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
