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
    <div className="col-span-12 mb-3 rounded-lg transition-shadow duration-300 hover:shadow-lg sm:col-span-6 sm:shadow-md md:col-span-4">
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
          <h4 className="line-clamp-1">{name}</h4>
          <div className="inline-block font-sans text-base text-gray-500 md:text-xs">
            <p className="mr-2 inline-block text-sm">
              {new Date(startDate).toDateString()}
            </p>
            <p className="inline-block text-sm">•</p>
            <p className="ml-2 inline-block text-sm">{time}</p>
          </div>
          {/* <p className="text-base">{venue}</p> */}
          <p className="mb-4 text-sm leading-relaxed text-gray-800 line-clamp-2">
            {content}
          </p>
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
