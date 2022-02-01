import Image from "next/image";
import navItems from "../../data/nav.json";
import NavItem from "../NavItem/NavItem";
const Navbar = ({ active }) => {
  return (
    <nav className="shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div>
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
          <div className="ml-auto">
            <ul>
              {navItems.map((navItem, index) => {
                return <NavItem key={index} nav={navItem} active={active} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
