import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { navLinks } from "../../constant";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin();

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="flex flex-row justify-between items-center">
        <a href="#home" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <p>Velevt Pour</p>
        </a>

        {!isMobile && (
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <img src="/images/burger-menu.svg" alt="Menu" className="w-8 h-8" />
          </button>
        )}
      </div>
      {isMobile && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "0" }}
        >
          <div className="absolute py-0 px-6 w-auto right-0">
            <button
              onClick={closeMenu}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <img src="/images/close-x.svg" alt="Close" className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-white text-lg hover:text-gray-300 transition-colors"
                    onClick={closeMenu}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
