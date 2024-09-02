import PropTypes from "prop-types";

export default function Text({ children, className }) {
  return <span className={"list__item__text " + className}>{children}</span>;
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
