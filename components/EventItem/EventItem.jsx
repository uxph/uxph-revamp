import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
const EventItem = ({ name, startDate, endDate, time, venue }) => {
  return (
    <div className="mb-5 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center gap-7 ">
        <div className="w-full p-3">
          <div className="relative w-full" style={{ height: "31rem" }}>
            <Image
              className="rounded-lg"
              src="/images/screenside-chat.jpeg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="p-5">
          <h3>Screenside Chat: Landing Your First UX Job</h3>
          <div>
            <p>Aug 27, 2020</p>
            <p>8:30-9:30PM</p>
            <p>Livestream Via Zoom and Facebook</p>
          </div>
          <Button variant="outlined">See Event Recap</Button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
