import React from "react";
import Image from "next/image";
import { Box } from "@material-ui/core";

const SponsorItem = ({ sponsor }) => {
  const { image_url, url, name, width } = sponsor;
  console.log(image_url);
  return (
    <a href={url} target="blank">
      <Box component="div" className="sponsor_item" borderRadius={8} p={2}>
        <Image
          className="sponsor_image"
          alt={name}
          //   src="/images/sponsor_logos/cebuxd.png"
          src={image_url}
          width={width}
          height={width}
        />
      </Box>
    </a>
  );
};

export default SponsorItem;
