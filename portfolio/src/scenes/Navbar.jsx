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

const Navbar = ({ isTopOfPage, selectedPage, setSetSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBackground = isTopOfPage ? "" : "bg-red";
  return (
    <nav className={`${navBackground} z-40 w-full fixed top-0 py-6`}>
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
              page="Testimonials"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSetSelectedPage={setSetSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg"></img>
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/*Close Icon*/}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg"></img>
              </button>
            </div>
            {/*Menu Items*/}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
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
                page="Testimonials"
                selectedPage={selectedPage}
                setSetSelectedPage={setSetSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSetSelectedPage={setSetSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
