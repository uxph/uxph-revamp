import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
const Layout = ({ children, animateNav = true }) => {
  return (
    <>
      <Navbar animateNav={animateNav} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
