import PropTypes from "prop-types";

export default function Item({ children, className = "" }) {
  return (
    <li className="list__item">
      <div className={className}>{children}</div>
    </li>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
