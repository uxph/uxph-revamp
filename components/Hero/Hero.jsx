import Image from "next/image";

const Hero = ({ imageUrl, headingText, content }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1D3450 0%, #1F4F8A 100%)",
      }}
      className="flex flex-auto flex-col items-center justify-end py-16 text-white md:flex-row"
    >
      <div className="w-11/12 md:mx-14 md:w-full">
        <h1>{headingText}</h1>
        {content}
      </div>
      <div className="mt-16 md:mt-0 md:w-9/12">
        <div className="relative block">
          <Image
            src={imageUrl}
            alt="Image"
            // layout="fill"
            width={800}
            height={700}
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
