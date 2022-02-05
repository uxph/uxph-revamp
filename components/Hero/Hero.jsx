import Image from "next/image";

const Hero = ({ imageUrl, headingText, content }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1D3450 0%, #1F4F8A 100%)",
      }}
      className="flex items-center justify-end  py-16 text-white"
    >
      <div className="mr-14 w-1/2">
        <h1>{headingText}</h1>
        {content}
      </div>
      <div>
        <div style={{ width: "800px", height: "700px" }} className="relative">
          <Image
            src={imageUrl}
            alt="Image"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
