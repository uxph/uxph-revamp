import Image from "next/image";

const MissionVision = ({ imageUrl, content }) => {
  return (
    <div className="my-5 flex gap-3">
      <div className="w-[10%]">
        <Image
          src={imageUrl}
          alt="Image"
          width="80px"
          height="80px"
          quality={100}
        />
      </div>
      <div className="w-[90%]">{content}</div>
    </div>
  );
};

export default MissionVision;
