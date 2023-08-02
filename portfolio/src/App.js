import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import Projects from "./scenes/Projects";
import DotGroup from "./scenes/DotGroup";
import LineGradient from "./components/LineGradient.jsx";
import MySkills from "./scenes/MySkills.jsx";
import Contact from "./scenes/Contact.jsx";
import Footer from "./scenes/Footer.jsx";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setTopOfPage(true);
      if (window.scrollY !== 0) setTopOfPage(false);
      if (window.scrollY < 650) setSelectedPage("home");
      else if (window.scrollY >= 650 && window.scrollY < 1400)
        setSelectedPage("skills");
      else if (window.scrollY < 3100) setSelectedPage("projects");
      else setSelectedPage("contact");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default App;
