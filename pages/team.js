import Layout from "../components/layout";
import SEO from "../components/seo";
import notion from "../utils/notion";
import Hero from "./../components/Hero/Hero";
import MemberCard from "./../components/MemberCard/MemberCard";
import { useState } from "react";
import MemberModal from "./../components/MemberModal/MemberModal";

const Team = ({ advisors, volunteers, leads }) => {
  const [modal, setModal] = useState(false);

  const openModal = (member) => {
    setModal(member);
    // document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Layout>
      <MemberModal member={modal} closeModal={closeModal} />
      <SEO title="Organizing Members" />
      <Hero headingText="Organizing Members" />
      <section className="py-12">
        <h2 className="text-center">Team Leads</h2>
        <div className="grid grid-cols-3 items-stretch justify-center px-80">
          {leads.map((member) => {
            return (
              <>
                <MemberCard member={member} openModal={openModal} />
              </>
            );
          })}
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
