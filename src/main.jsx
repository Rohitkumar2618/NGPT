import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

// const appRouter = createBrowserRouter([
//   { path: "/", element: <Navbar /> },
//   { path: "/", element: <h1></h1> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={appRouter}> */}
    <App />
    {/* </RouterProvider> */}
  </React.StrictMode>
);
