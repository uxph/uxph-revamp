import Image from "next/image";

const MemberModal = ({ member, closeModal }) => {
  const { image, name, team } = member;

  if (member) {
    return (
      <div className="fixed top-1/4 left-1/4 z-20  w-1/2 rounded-md bg-white p-12 shadow-sm">
        <div className="text-right">
          <button
            className="text-h3"
            onClick={() => {
              closeModal();
            }}
          >
            &#10006;
          </button>
        </div>
        <div className="flex items-start gap-4">
          <div className="relative w-64" style={{ height: "110px" }}>
            <Image
              className="rounded-full"
              src={image.files[0].file.url}
              objectFit="cover"
              alt={name.title[0].plain_text}
              layout="fill"
            />
          </div>
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
      </div>
    );
  }
  return <></>;
};

export default MemberModal;
