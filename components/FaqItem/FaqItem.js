import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotionRichText from "../NotionRichText/NotionRichText";

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
            {answer.map((ans, i) => (
              <NotionRichText text={ans} prevText={answer[i - 1]} index={i} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqItem;
