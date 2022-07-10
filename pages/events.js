import React, { useState } from "react";
import SEO from "../components/seo";
import notion from "../utils/notion";
import Layout from "./../components/layout";
import Hero from "../components/Hero/Hero";
import Button from "./../components/Button/Button";
import EventItem from "./../components/EventItem/EventItem";
import { eventFilter } from "../utils/notion-filters";
import Image from "next/image";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Events = ({ events }) => {
  const [page, setPage] = useState(0);
  let current_event = events[0];
  const MAX_PAGE = Math.ceil((events.length - 1) / 6);
  return (
    <Layout>
      <SEO title="Events" />
      <Hero>
        <div className="m container mx-auto w-full">
          <h1 className="mb-6 text-center text-2xl sm:text-4xl">
            Latest Event
          </h1>
          <div className="mx-auto grid h-72 w-full grid-flow-row grid-cols-12  gap-4 rounded-md p-2 md:grid-flow-col lg:w-4/5">
            <div className="relative col-span-12 h-32 sm:h-72 md:col-span-4 md:h-full">
              <Image
                src={current_event.imageSquare.files[0].file.url}
                layout={"fill"}
                objectFit="cover"
                objectPosition={"center"}
                className="rounded-md"
              />
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="mb-2 text-xl sm:text-3xl">
                {current_event.name.title[0].plain_text}
              </h2>
              <div className="mb-3 text-adaptive-white-4 ">
                <p className="mr-1 inline-block text-xs sm:mr-3 md:mr-4 md:text-sm">
                  {current_event.eventDate.date.end === null
                    ? new Date(
                        current_event.eventDate.date.start
                      ).toDateString()
                    : `${current_event.eventDate.date.start} - ${current_event.eventDate.date.end}`}
                </p>
                <p className="inline-block text-xs md:text-sm">•</p>
                <p className="ml-1 mr-1 inline-block text-xs sm:ml-3 sm:mr-3 md:ml-4 md:mr-4 md:text-sm">
                  {current_event.time.rich_text[0].plain_text}
                </p>
                <p className="inline-block text-xs md:text-sm">•</p>
                <p className="ml-0 inline-block text-xs sm:ml-3 sm:mr-3 md:ml-4 md:mr-4 md:text-sm">
                  {current_event.venue.rich_text[0].plain_text}
                </p>
              </div>
              <p className="text-adaptive-white-4 line-clamp-3 lg:line-clamp-5">
                {current_event.content.rich_text[0].plain_text}
              </p>
              <Button
                className="mt-4"
                href={current_event.ticketUrl?.url || "#"}
                isExternal
              >
                Get Tickets
              </Button>
            </div>
          </div>
        </div>
      </Hero>
      <section className="container mx-auto py-16">
        <div className="mb-4 grid grid-cols-12 items-stretch justify-center gap-8 px-2 lg:px-32">
          <h2 className="col-span-6 mb-2 text-2xl md:text-3xl">Past Events</h2>
          <div className="col-span-6 flex flex-row-reverse items-center">
            <AiFillRightCircle
              size={"24"}
              color={"#15b0de"}
              className={`${
                page === MAX_PAGE - 1
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              onClick={() => page !== MAX_PAGE - 1 && setPage(page + 1)}
            />
            <p className="mx-2 text-xs sm:mx-4 sm:text-base">
              Page {page + 1} of {MAX_PAGE}
            </p>
            <AiFillLeftCircle
              size={"24"}
              color={"#15b0de"}
              className={`${
                page === 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              onClick={() => page !== 0 && setPage(page - 1)}
            />
          </div>
        </div>
        <div className="mb-4 grid grid-cols-12 items-stretch justify-center gap-8 px-2 lg:px-32">
          {events.slice(page * 6 + 1, page * 6 + 7).map((event, index) => {
            const {
              name,
              time,
              eventDate,
              venue,
              imageSquare,
              content,
              livestreamUrl,
            } = event;
            return (
              <EventItem
                key={index}
                name={name.title[0].plain_text}
                time={time.rich_text[0].plain_text}
                startDate={eventDate.date.start}
                endDate={eventDate.date.end}
                venue={venue.rich_text[0].plain_text}
                image={imageSquare.files[0].file.url}
                content={content.rich_text[0]?.plain_text}
                livestreamUrl={livestreamUrl.url}
              />
            );
          })}
        </div>
        <div className="mb-8 flex flex-row-reverse items-center px-2 lg:px-32">
          <AiFillRightCircle
            size={"24"}
            color={"#15b0de"}
            className={`${
              page === MAX_PAGE - 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            onClick={() => page !== MAX_PAGE - 1 && setPage(page + 1)}
          />
          <p className="mx-2 text-xs sm:mx-4 sm:text-base">
            Page {page + 1} of {MAX_PAGE}
          </p>
          <AiFillLeftCircle
            size={"24"}
            color={"#15b0de"}
            className={`${
              page === 0 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
            onClick={() => page !== 0 && setPage(page - 1)}
          />
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
