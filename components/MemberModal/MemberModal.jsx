import Image from "next/image";

const MemberModal = ({ member }) => {
  const { image, name, team } = member;

  if (member) {
    return (
      <>
        <div className="relative flex w-full justify-center overflow-hidden">
          <Image
            className=" rounded-full"
            src={image.files[0].file.url}
            objectFit="cover"
            alt={name.title[0].plain_text}
            width="250px"
            height="250px"
            layout="fixed"
          />
        </div>
        <div className="flex items-start gap-4">
          <div>
            <h3 className="text-primary-color">{name.title[0].plain_text}</h3>
            <p className="text-brand-color">{team.multi_select[0].name}</p>
            <h5>Bio</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              est, optio earum praesentium cum numquam laborum dolores officia
              illum quam asperiores quas molestias voluptates? Earum labore
              numquam esse necessitatibus consequuntur?
            </p>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default MemberModal;
