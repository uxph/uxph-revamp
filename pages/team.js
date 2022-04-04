import Layout from "../components/layout";
import SEO from "../components/seo";
import notion from "../utils/notion";

const Team = () => {
  return (
    <Layout>
      <SEO title="Organizing Members" />
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
