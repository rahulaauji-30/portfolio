import { useState,useEffect } from "react";
import Sidebar from "./components/Web/Sidebar";
import Navbar from "./components/Web/Navbar";
import About from "./components/Web/About";
import Project from "./components/Web/Project";
import Projects from "./components/Web/Projects";
import { Outlet } from "react-router-dom";
import Mobile from "./components/mobile/Mobile";
import Web from "./components/Web"
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <Mobile /> : <Web />}</>;
}

export default App;
