import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
const EventItem = ({ name, startDate, endDate, time, venue, image }) => {
  return (
    <div className="mb-5 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col gap-7 ">
        <div className="w-full p-3">
          <div className="relative h-64 w-full">
            <Image
              className="rounded-lg"
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="p-5">
          <h3>{name}</h3>
          <div>
            <p>
              {endDate === null
                ? new Date(startDate).toDateString()
                : `${startDate} - ${endDate}`}
            </p>
            <p>{time}</p>
            <p>{venue}</p>
          </div>
          <Button variant="outlined">See Event Recap</Button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
