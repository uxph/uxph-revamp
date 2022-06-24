import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
const EventItem = ({
  name,
  startDate,
  endDate,
  time,
  venue,
  image,
  content,
  livestreamUrl,
}) => {
  return (
    <div className="col-span-12 mb-3 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg sm:col-span-6 md:col-span-4">
      <div className="flex flex-col gap-2 ">
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
        <div className="px-5 pb-4">
          <h3 className="line-clamp-1">{name}</h3>
          <div className="inline-block font-sans text-base text-gray-500 md:text-xs">
            <p className="mr-2 inline-block text-sm">
              {endDate === null
                ? new Date(startDate).toDateString()
                : `${startDate} - ${endDate}`}
            </p>
            <p className="inline-block text-sm">•</p>
            <p className="ml-2 inline-block text-sm">{time}</p>
          </div>
          {/* <p className="text-base">{venue}</p> */}
          <p className="mb-4 text-base line-clamp-3">{content}</p>
          <Button
            variant="outlined"
            href={livestreamUrl || "#"}
            isExternal={livestreamUrl}
          >
            See Event Recap
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
