import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { hasAnnotation } from "../../helper/hasAnnotation";

const FaqItem = ({ faq }) => {
  const { question, answer, panel } = faq;
  return (
    <Box component="div" className="mb-8">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panel}-content`}
          id={`${panel}-header`}
        >
          <h4 className="text-dark">{question}</h4>
        </AccordionSummary>
        <AccordionDetails className="d-block">
          <div className="inline-block">
            {answer.map((ans, i) => {
              let textClass = ``;
              let prevTextClass = ``;

              if (ans?.annotations?.bold) textClass += `font-bold `;
              if (ans?.annotations?.italic) textClass += `italic `;
              if (ans?.annotations?.underline) textClass += `underline `;
              if (ans?.annotations?.strikethrough) textClass += `line-through `;

              switch (true) {
                case ans?.href !== null:
                  return ans?.href?.includes("@") ? (
                    <a
                      href={`mailto:${ans?.href}`}
                      className={`inline text-blue-500 ${textClass}`}
                    >
                      {ans?.text?.content}
                    </a>
                  ) : (
                    <a
                      href={ans?.href}
                      className={`inline text-blue-500 ${textClass}`}
                    >
                      {ans?.text?.content}
                    </a>
                  );
                case ans?.text?.content.trim() === "NEXT":
                  return <br />;
                case ans?.text?.content.trim() === ".":
                  return ans?.text?.content;
                case i === 0 ||
                  answer[i - 1].href !== null ||
                  textClass.trim() !== "" ||
                  hasAnnotation(answer[i - 1].annotations):
                  return (
                    <p className={`inline ${textClass}`}>
                      {ans?.text?.content}
                    </p>
                  );
                default:
                  return (
                    <>
                      <br />
                      <p className={`inline ${textClass}`}>
                        {ans?.text?.content}
                      </p>
                    </>
                  );
              }
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqItem;
