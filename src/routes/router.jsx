import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/home/Home";
import RootLayout from "../layouts/RootLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        Component: Home,
      }
    ]
  },
]);