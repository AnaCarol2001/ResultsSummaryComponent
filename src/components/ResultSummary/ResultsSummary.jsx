import Heading from "../utility/Heading";
import Section from "../utility/Section";
import data from "../../data.json";
import Summary from "./Summary";
import "./styles.css";
import Button from "../utility/Button";

export default function ResultsSummary() {
  return (
    <Section
      style={{ "--_count-items": data.length }}
      className="results-summary"
    >
      <div className="results-summary__results">
        <Heading className="fs-large fw-regular">Your Result</Heading>
        <p className="results-summary__results__score">
          <span className="fs-xxLarge fw-black fc-white">76</span> of 100
        </p>
        <div>
          <p className="fs-xLarge fw-black fc-white mb-regular">Great</p>
          <p>
            You scored higher than 65% of the people who have taken these test.
          </p>
        </div>
      </div>
      <div className="results-summary__summary">
        <Summary categories={data} />
        <Button className="action-button">Continue</Button>
      </div>
    </Section>
  );
}
