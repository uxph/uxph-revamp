import Image from "next/image";
import { useState, useEffect } from "react";
import navItems from "../../data/nav.json";
import NavItem from "../NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import NavItemMobile from "../NavItem/NavItemMobile";

const Navbar = ({ active }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="py-5 shadow-md md:py-0">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex items-center px-5">
            <button
              className="block text-3xl leading-3 text-adaptive-dark-2 md:hidden"
              onClick={() => {
                setShowNav(true);
              }}
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
          <div className="ml-auto hidden md:block">
            <ul>
              {navItems.map((navItem, index) => {
                return <NavItem key={index} nav={navItem} active={active} />;
              })}
            </ul>
          </div>
        </div>
        <div
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
