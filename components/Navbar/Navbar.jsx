import Image from "next/image";
import { useState, useEffect } from "react";
import navItems from "../../data/nav.json";
import NavItem from "../NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import NavItemMobile from "../NavItem/NavItemMobile";
import styles from "./Navbar.module.scss";

const Navbar = ({ active, animateNav }) => {
  const [showNav, setShowNav] = useState(false);
  const [navStyle, setNavStyle] = useState(
    animateNav ? "primary" : "secondary"
  );

  useEffect(() => {
    if (animateNav) {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        setNavStyle(scrollY > 0 ? "secondary" : "primary");
      });
    }
  }, []);

  return (
    <nav
      id={styles.navBar}
      className="w-full py-5 transition-all duration-300 lg:py-0"
      data-style={navStyle}
    >
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex items-center px-5">
            <button
              className="block text-3xl leading-3 text-adaptive-dark-2 lg:hidden"
              onClick={() => {
                setShowNav(true);
              }}
              aria-expanded={showNav}
              aria-controls="mobileNav"
              aria-label="Toggle Mobile Navigation"
            >
              <GiHamburgerMenu />
            </button>
            <div
              style={{ width: "200px", height: "30px" }}
              className="relative"
            >
              <Image
                src="/images/brand/uxph_logo.svg"
                alt="UXPH Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="ml-auto hidden lg:block">
            <ul>
              {navItems.map((navItem, index) => {
                return (
                  <NavItem
                    key={index}
                    nav={navItem}
                    active={active}
                    navStyle={navStyle}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div
          id="mobileNav"
          className={`${
            showNav ? "left-0" : "-left-full"
          } absolute top-0 flex h-screen w-full flex-col overflow-scroll bg-adaptive-dark-3 transition-all duration-500`}
        >
          <button
            className="ml-auto p-5 text-h2 text-white"
            onClick={() => {
              setShowNav(false);
            }}
          >
            <FaTimes />
          </button>
          <ul>
            {navItems.map((navItem, index) => {
              return (
                <NavItemMobile key={index} nav={navItem} active={active} />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
