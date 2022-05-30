import MemberCard from "../MemberCard/MemberCard";

const TeamList = ({ members, openModal }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-center">Team Leads</h2>
        <div className="grid grid-flow-row grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => {
            return (
              <div className="mx-auto">
                <MemberCard key={index} member={member} openModal={openModal} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamList;
