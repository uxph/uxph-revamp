import Image from "next/image";

const PerkItem = ({ imageUrl, title, content }) => {
  return (
    <div className="">
      <Image
        src={imageUrl}
        alt="Image"
        width="50px"
        height="50px"
        quality={100}
      />
      <h4 className="text-primary-color">{title}</h4>
      <p className="text-secondary-activeColor">{content}</p>
    </div>
  );
};

export default PerkItem;
