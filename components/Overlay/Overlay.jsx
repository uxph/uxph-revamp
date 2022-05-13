const Overlay = ({ active, close }) => {
  if (active) {
    return (
      <div
        onClick={() => close()}
        className="fixed top-0 z-10 h-screen w-full bg-black opacity-50"
      ></div>
    );
  }
  return <div></div>;
};

export default Overlay;
