import React from "react";
import { RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Signin from "./Components/Signin";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Body />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Signin />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
