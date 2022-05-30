import Layout from "../components/layout";
import SEO from "../components/seo";
import notion from "../utils/notion";
import Hero from "./../components/Hero/Hero";
import MemberCard from "./../components/MemberCard/MemberCard";
import { useState } from "react";
import MemberModal from "./../components/MemberModal/MemberModal";
import Modal from "../components/Modal/Modal";
import TeamList from "../components/TeamList/TeamList";
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
      <TeamList members={leads} openModal={openModal} />
      <TeamList members={volunteers} openModal={openModal} />
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
