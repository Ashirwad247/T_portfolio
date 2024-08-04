import Nav from "./Components/Nav";
import "./App.css";
import Footer from "./Components/Footer";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
