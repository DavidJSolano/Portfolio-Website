import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSetSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSetSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSetSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">DS</h4>

        {/*Desktop*/}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
            <Link
              page="Project"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
