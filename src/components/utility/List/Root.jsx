import PropTypes from "prop-types";
import "./styles.css";

export default function Root({ children, className, hasListStyle = true }) {
  const listStyle = hasListStyle ? "" : "list--noStyle";
  return <ul className={"list " + listStyle + " " + className}>{children}</ul>;
}

Root.propTypes = {
  children: PropTypes.array,
  hasListStyle: PropTypes.bool,
  className: PropTypes.string,
};
