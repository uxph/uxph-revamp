import NotionRichText from "../NotionRichText/NotionRichText";
import Image from "next/image";
const NotionBlock = ({ object }) => {
  switch (object.type) {
    case "heading_2":
      let objectHeading2 =
        object.heading_2?.text || object.heading_2?.rich_text;
      return (
        <h2 className="pt-8 pb-2 text-xl sm:text-2xl lg:text-3xl">
          {objectHeading2[0].text.content}
        </h2>
      );
    case "heading_3":
      let objectHeading3 =
        object.heading_3?.text || object.heading_3?.rich_text;
      return (
        <h3 className="pt-8 pb-2 text-xl sm:text-lg lg:text-xl">
          {objectHeading3[0].text.content}
        </h3>
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
    case "bulleted_list_item":
      console.log(object.bulleted_list_item.rich_text);
      return (
        <li className="ml-2">
          {" "}
          {object.bulleted_list_item.rich_text.map((rt, index) => (
            <NotionRichText text={rt} />
          ))}
        </li>
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
