import React from "react";
import Image from "next/image";
import { Box } from "@material-ui/core";

const SponsorItem = ({ sponsor }) => {
  const { image_url, url, name, width } = sponsor;
  console.log(image_url);
  return (
    <section className=" flex justify-center">
      <a href={url} target="blank">
        <div className="h-32 my-4 rounded-full overflow-hidden drop-shadow-lg ease-in-out transition hover:scale-125">
            <Image 
                alt={name} 
                src={image_url} 
                width="130px" 
                height="130px"/>
        </div>
      </a>
    </section>
  );
};

export default SponsorItem;
