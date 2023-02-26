import React, { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const PlayGround = lazy(() => import("./PlayGround"));
const Page404 = lazy(() => import("../pages/Page404"));

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/code/:folderId/:playgroundId",
    component: <PlayGround />,
  },
  {
    path: "*",
    component: <Page404 />,
  },
];

export default routes;
