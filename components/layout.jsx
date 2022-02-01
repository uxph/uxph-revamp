import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      {/* nav */}
      <main>{children}</main>
      <Footer />
      {/* footer */}
    </>
  )
}

export default Layout
