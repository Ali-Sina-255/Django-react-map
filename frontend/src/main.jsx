import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Listing from "./Components/Listings.jsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/listing" element={<Listing />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StyledEngineProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </StyledEngineProvider>
);
