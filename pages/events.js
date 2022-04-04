import React from "react";
import SEO from "../components/seo";
import notion from "../utils/notion";
import Layout from "./../components/layout";
import Hero from "../components/Hero/Hero";
import Button from "./../components/Button/Button";
import EventItem from "./../components/EventItem/EventItem";
import { eventFilter } from "../utils/notion-filters";
const Events = ({ events }) => {
  return (
    <Layout>
      <SEO title="Events" />
      <Hero
        imageUrl="/images/home/community-partner.png"
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
      <section className="py-48">
        <div className="grid grid-cols-3 items-stretch justify-center gap-8 px-32">
          {events.map((event, index) => {
            const { name, time, eventDate, venue, imageSquare } = event;
            return (
              <EventItem
                key={index}
                name={name.title[0].plain_text}
                time={time.rich_text[0].plain_text}
                startDate={eventDate.date.start}
                endDate={eventDate.date.end}
                venue={venue.rich_text[0].plain_text}
                image={imageSquare.files[0].file.url}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Events;

export async function getStaticProps() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_EVENTS_DATABASE,
    ...eventFilter,
  });
  const events = results.map((result) => result.properties);
  return {
    props: { events },
    revalidate: 300,
  };
}
