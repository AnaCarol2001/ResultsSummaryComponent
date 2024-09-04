import Section from "../utility/Section";
import Heading from "../utility/Heading";
import PropTypes from "prop-types";
import List from "../utility/List";

export default function Summary({ categories }) {
  const colors = ["item-red", "item-yellow", "item-green", "item-blue"];

  return (
    <Section>
      <Heading className="fs-large fs-regular mb-medium">Summary</Heading>
      <List.Root hasListStyle={false}>
        {categories.map((category, index) => (
          <List.Item
            key={index}
            className={colors[index]}
            style={{ "--_slide-order": index + 1 }}
          >
            <List.Icon>
              <img src={category.icon} aria-hidden="true" />
            </List.Icon>
            <List.Text className="fw-bold">{category.category}</List.Text>
            <List.SecondaryElement className="fc-gray fw-bold text-noWrap">
              <span className="fw-bold fc-darkBlue">{category.score}</span> /
              100
            </List.SecondaryElement>
          </List.Item>
        ))}
      </List.Root>
    </Section>
  );
}

Summary.propTypes = {
  categories: PropTypes.array,
};
