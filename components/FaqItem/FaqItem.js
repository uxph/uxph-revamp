import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FaqItem = ({ faq }) => {
  const { question, answer, panel } = faq;
  return (
    <Box component="div" className="mb-8">
      {/* <h3 className="margin-bottom-8 text-dark font-size-24">{question}</h3>
        {answer} */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panel}-content`}
          id={`${panel}-header`}
        >
          <h4 className="text-dark">{question}</h4>
        </AccordionSummary>
        <AccordionDetails className="d-block">{answer}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqItem;
