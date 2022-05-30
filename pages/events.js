import React from "react";
import SEO from "../components/seo";
import notion from "../utils/notion";
import Layout from "./../components/layout";
import Hero from "../components/Hero/Hero";
import Button from "./../components/Button/Button";
import EventItem from "./../components/EventItem/EventItem";
import { eventFilter } from "../utils/notion-filters";
import Image from "next/image";

const Events = ({ events }) => {
  return (
    <Layout>
      <SEO title="Events" />
      <Hero>
        <div className="w-full">
          <h1 className="text-center">Events</h1>
        </div>
      </Hero>
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
