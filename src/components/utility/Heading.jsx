import PropTypes from "prop-types";
import { useContext } from "react";
import { HeadingLevelContext } from "../../contexts/HeadingLevelContext";

export default function Heading({ children, ...props }) {
  const level = useContext(HeadingLevelContext);

  const isValidHeading = (heading) => {
    const validHeadings = [1, 2, 3, 4, 5, 6];

    return validHeadings.includes(heading);
  };

  const H = isValidHeading(level) ? "h" + level : "p";

  return <H {...props}>{children}</H>;
}

Heading.propTypes = {
  children: PropTypes.node,
};
