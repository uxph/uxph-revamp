import Image from "next/image";
const MemberCard = ({ member, openModal }) => {
  const { image, name, team } = member;

  return (
    <button className="mx-auto" onClick={() => openModal(member)}>
      <div className="block rounded-lg p-5 text-center shadow-lg transition-all duration-300 hover:scale-105">
        <div className="relative h-64 w-64">
          <Image
            className="rounded-lg"
            src={image.files[0].file.url}
            objectFit="cover"
            alt={name.title[0].plain_text}
            layout="fill"
          />
        </div>
        <h3 className="mt-3 text-primary-color">{name.title[0].plain_text}</h3>
        <p className="text-brand-color">{team.multi_select[0].name}</p>
      </div>
    </button>
  );
};

export default MemberCard;
