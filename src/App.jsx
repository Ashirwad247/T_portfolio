import Nav from "./Components/Nav";
import "./App.css";
import Footer from "./Components/Footer";

import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    // You can set the title based on the current location.pathname
    if (location.pathname === "/") {
      document.title = "LernWeg";
    } else if (location.pathname === "/about") {
      document.title = "About";
    } else if (location.pathname === "/contact") {
      document.title = "Contact";
    } else if (location.pathname.includes("/mini-projects")) {
      document.title = "Projects";
    } else if (location.pathname.includes("/blogs/")) {
      document.title = "Blogs";
    } else {
      document.title = "Error";
    }
  }, [location]);
  return (
    <>
      <Nav />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
