import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Deflogs from "./Components/Deflogs.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs/b1" element={<Deflogs />} />
      <Route path="/mini-projects/m1" element={<Deflogs />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
