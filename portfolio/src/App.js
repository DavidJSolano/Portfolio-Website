import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import LineGradient from "./components/LineGradient.jsx";
import MySkills from "./scenes/MySkills.jsx";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setTopOfPage(true);
      if (window.scrollY !== 0) setTopOfPage(false);
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
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
    </div>
  );
}
export default App;
