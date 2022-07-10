import React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import notion from "../utils/notion";
import NotionBlock from "../components/NotionBlock/NotionBlock";

const COC = ({ blocks }) => {
  console.log(blocks);
  return (
    <Layout animateNav={false}>
      <SEO title="Code of Conduct" />
      <Hero>
        <section className="container mx-auto px-2 sm:px-16 md:px-48">
          <h1>Code of Conduct</h1>
          <h4>User Experience Philippines</h4>
          <br />
          <br />
          <h3>Our commitment to our community</h3>
          <p>
            UXPH's aim in hosting events is to offer a positive and safe
            environment within the community. Just like we believe that more
            diverse teams build better products, we know that diverse
            representation at events ultimately creates a stronger community. To
            that end, our goal is to create an environment where everyone feels
            welcome to participate, speak up, ask questions, and engage in
            conversation. We invite all those who participate in this event to
            help us create safe and positive experiences for everyone.
          </p>
          <br />
          <p>
            We follow a strict Code of Conduct for all our events and outlets,
            be it in-person or online. Before you participate in any UXPH
            initiative, please review the Code of Conduct below.
          </p>
        </section>
      </Hero>
      <section className="container mx-auto  py-8 px-2 leading-6 text-gray-700 sm:px-16 md:px-48">
        {blocks.map((block) => {
          return <NotionBlock object={block} />;
        })}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await notion.blocks.children.list({
    block_id: process.env.NOTION_COC_PAGE,
  });
  console.log(response.results);

  //  const events = results.map((result) => result.properties);

  return {
    props: { blocks: response.results },
    revalidate: 300,
  };
}

export default COC;
