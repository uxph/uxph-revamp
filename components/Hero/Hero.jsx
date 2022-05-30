const Hero = ({ children }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1D3450 0%, #1F4F8A 100%)",
      }}
      className="flex flex-auto flex-col items-center py-36 text-white md:flex-row"
    >
      {children}
    </section>
  );
};

export default Hero;
