import NotionRichText from "../NotionRichText/NotionRichText";
import Image from "next/image";
const NotionBlock = ({ object }) => {
  const objectHeading = object.heading_2?.text || object.heading_2?.rich_text;
  switch (object.type) {
    case "heading_2":
      return (
        <h2 className="pt-8 pb-2 text-xl sm:text-2xl lg:text-3xl">
          {objectHeading[0].text.content}
        </h2>
      );
    case "image":
      return (
        <div className="relative -my-12 sm:-my-16 lg:-my-32">
          <Image
            src={object.image.file.url}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            className={" "}
          />
        </div>
      );

    case "paragraph":
      let paragraphs =
        object.paragraph.text || object.paragraph.rich_text || [];
      if (!paragraphs.length) return <br />;
      return (
        <>
          {paragraphs.map((par, i) => (
            <NotionRichText text={par} prevText={paragraphs[i - 1]} />
          ))}
          <br />
        </>
      );

    default:
      return null;
  }
};

export default NotionBlock;
