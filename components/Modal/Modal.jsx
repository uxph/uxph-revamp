const Modal = ({ active, close, children }) => {
  if (active) {
    return (
      <div className="fixed top-0 z-10 h-full w-full bg-black bg-opacity-70">
        <button
          className="absolute h-full w-full "
          onClick={() => {
            close();
          }}
        ></button>
        <div className="fixed z-20 w-full translate-y-[25%]  rounded-md bg-white p-12 shadow-sm md:w-1/2 md:translate-x-[50%]">
          <div className="text-right">
            <button
              className="text-h3"
              onClick={() => {
                close();
              }}
            >
              &#10006;
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }
  return "";
};

export default Modal;
