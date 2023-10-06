import React, {useEffect, useState, useRef} from "react"
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Intro from "./components/Intro";

const RevealOnScroll = ({ children }) => { 
  const [isVisible, setIsVisible] = useState(false); 
  const ref = useRef(null); 

  useEffect(() => { 
      const scrollObserver = new IntersectionObserver(([entry]) => { 
          if (entry.isIntersecting) { 
              setIsVisible(true); 
              scrollObserver.unobserve(entry.target); 
          } 
      }); 

      scrollObserver.observe(ref.current); 

      return () => { 
          if (ref.current) { 
              scrollObserver.unobserve(ref.current); 
          } 
      }; 
  }, []); 

  const classes = `transition-opacity duration-1000  
      ${isVisible ? "opacity-100" : "opacity-0"
      }`; 

  return ( 
      <div ref={ref} className={classes}> 
          {children} 
      </div> 
  ); 
}; 

function App() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }, []);
  
    const handleThemeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);
  
    const sun = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    );
  
    const moon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    );
  
    return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-40 p-4 right-2 top-2 bg-gradient-to-r from-green-500 to-blue-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500 dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-500 dark:hover:from-green-500 dark:hover:to-blue-500 text-lg rounded-md"
      >
        {theme === 'dark' ? sun : moon}
      </button>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-serif">
        <div className="max-w-7xl w-11/12 mx-auto">
          <RevealOnScroll>
          <Intro />
          </RevealOnScroll>
          </div>
          <RevealOnScroll>
          <picture className="flex md:max-w-none ps-0 pe-0 items-center justify-center md:h-96 mb-20 bg-fixed bg-cover bg-center md:bg-code"/>
          </RevealOnScroll>
          <div className="max-w-7xl w-11/12 mx-auto">
          <RevealOnScroll>
          <Portfolio />
          </RevealOnScroll>
          </div>
          <RevealOnScroll>
          <picture class="flex max-w-none ps-0 pe-0 items-center justify-center md:h-96 mb-20 bg-fixed bg-center bg-cover md:bg-UEA"/>
          </RevealOnScroll>
          <RevealOnScroll>
          <div className="max-w-5xl w-11/12 mx-auto">
          <Timeline />
          </div>
          </RevealOnScroll>
          <RevealOnScroll>
          <picture class="flex max-w-none ps-0 pe-0 items-center justify-center md:h-96 mb-20 bg-fixed bg-center bg-cover md:bg-bury_2"/>
          </RevealOnScroll>
          <RevealOnScroll>
          <div className="max-w-5xl w-11/12 mx-auto">
          <Contact />
          <Footer />
        </div>
          </RevealOnScroll>
      </div>
     </>
    )
}

export default App
