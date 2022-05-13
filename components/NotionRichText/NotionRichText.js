import { hasAnnotation } from "../../helper/hasAnnotation";

const NotionRichText = ({ text, prevText, index }) => {
  let textClass = ``;

  if (text?.annotations?.bold) textClass += `font-bold `;
  if (text?.annotations?.italic) textClass += `italic `;
  if (text?.annotations?.underline) textClass += `underline `;
  if (text?.annotations?.strikethrough) textClass += `line-through `;

  switch (true) {
    case text?.href !== null:
      return text?.href?.includes("@") ? (
        <a
          href={`mailto:${text?.href}`}
          className={`inline text-blue-500 ${textClass}`}
        >
          {text?.text?.content}
        </a>
      ) : (
        <a href={text?.href} className={`inline text-blue-500 ${textClass}`}>
          {text?.text?.content}
        </a>
      );
    case text?.text?.content.trim() === "NEXT":
      return <br />;
    case text?.text?.content.trim() === ".":
      return text?.text?.content;
    case index === 0 ||
      prevText?.href !== null ||
      textClass.trim() !== "" ||
      hasAnnotation(prevText.annotations):
      return <p className={`inline ${textClass}`}>{text?.text?.content}</p>;
    default:
      return (
        <>
          <br />
          <p className={`inline ${textClass}`}>{text?.text?.content}</p>
        </>
      );
  }
};

export default NotionRichText;
