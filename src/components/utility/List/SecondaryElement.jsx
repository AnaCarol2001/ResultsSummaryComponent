import PropTypes from "prop-types";

export default function SecondaryElement({ children, className }) {
  return <span className={className}>{children}</span>;
}

SecondaryElement.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
