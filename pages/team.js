import Layout from "../components/layout";
import SEO from "../components/seo";
import notion from "../utils/notion";
import Hero from "./../components/Hero/Hero";
import MemberCard from "./../components/MemberCard/MemberCard";
import { useState } from "react";
import MemberModal from "./../components/MemberModal/MemberModal";
import Modal from "../components/Modal/Modal";

const Team = ({ advisors, volunteers, leads }) => {
  const [modal, setModal] = useState(false);

  const openModal = (member) => {
    setModal(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Layout>
      <Modal active={modal} close={closeModal}>
        <MemberModal member={modal} />
      </Modal>
      <SEO title="Organizing Members" />
      <Hero headingText="Organizing Members" />
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-center">Team Leads</h2>
          <div className="grid grid-flow-row grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3">
            {leads.map((member, index) => {
              return (
                <div className="mx-auto">
                  <MemberCard
                    key={index}
                    member={member}
                    openModal={openModal}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-center">Volunteers</h2>
          <div className="grid grid-cols-1 items-stretch justify-center gap-10  md:grid-cols-2 lg:grid-cols-3">
            {volunteers.map((member, index) => {
              return (
                <>
                  <MemberCard
                    key={index}
                    member={member}
                    openModal={openModal}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

const getTeamMembersData = async (dbId) => {
  const { results } = await notion.databases.query({
    database_id: dbId,
  });
  const members = results.map((result) => result.properties);

  return members;
};

export async function getStaticProps() {
  const [advisors, volunteers, leads] = await Promise.all([
    getTeamMembersData(process.env.NOTION_ADVISORS_DATABASE),
    getTeamMembersData(process.env.NOTION_VOLUNTEERS_DATABASE),
    getTeamMembersData(process.env.NOTION_LEADS_DATABASE),
  ]);
  return {
    props: { advisors, volunteers, leads },
    revalidate: 300,
  };
}
