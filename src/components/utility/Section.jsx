import { useContext } from "react";
import { HeadingLevelContext } from "../../contexts/HeadingLevelContext";
import PropTypes from "prop-types";

export default function Section({ children, ...props }) {
  const headingLevel = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <section {...props}>{children}</section>
    </HeadingLevelContext.Provider>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};
