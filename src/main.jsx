import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Resume from './components/Web/Resume.jsx';
import Contact from './components/Web/Contact.jsx';
import AboutM from './components/mobile/AboutM.jsx';
import ResumeM from './components/mobile/ResumeM.jsx';
import ProjectM from './components/mobile/ProjectM.jsx';
import ContactM from './components/mobile/ContactM.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import About from './components/Web/About.jsx';
import Projects from './components/Web/Projects.jsx';

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: isMobile ? <AboutM /> : <About />,
        },
        {
          path: 'projects',
          element: isMobile ? <ProjectM /> : <Projects />,
        },
        {
          path: 'resume',
          element: isMobile ? <ResumeM /> : <Resume />,
        },
        {
          path: 'contact',
          element: isMobile ? <ContactM /> : <Contact />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
