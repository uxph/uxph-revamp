import React from "react";
import SEO from "../components/seo";
import notion from "../utils/notion";
import Layout from "./../components/layout";
import Hero from "../components/Hero/Hero";
import Button from "./../components/Button/Button";
import EventItem from "./../components/EventItem/EventItem";

const Events = ({ results }) => {
  return (
    <Layout>
      <SEO title="Events" />
      <Hero
        imageUrl="/images/home/hero-collage.png"
        headingText="UX Philippines"
        content={
          <>
            <p className="mb-5">
              <b>
                Welcome to the Philippines' largest community of individuals
                passionate about the realm of UX (User Experience), and all
                things related.
              </b>
              Our community has over 4,000 local and international members from
              a wide range of industries related to technology and even
              traditional businesses.
            </p>
            <div className="flex flex-col lg:flex-row">
              <Button variant="white" className="mb-5 lg:mb-0 lg:mr-5">
                Learn More
              </Button>
              <Button variant="white-alternative">
                Join our Facebook group
              </Button>
            </div>
          </>
        }
      />
      <div className="grid grid-cols-3 items-center justify-center gap-8 px-32">
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
    </Layout>
  );
};

export default Events;

export async function getServerSideProps() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_EVENTS_DATABASE,
  });
  console.log(results[0].properties.name.title[0].text.content);
  return {
    props: { results },
  };
}
