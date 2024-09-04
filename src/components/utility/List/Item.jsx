import PropTypes from "prop-types";

export default function Item({ children, className = "", ...props }) {
  return (
    <li className="list__item" {...props}>
      <div className={className}>{children}</div>
    </li>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
