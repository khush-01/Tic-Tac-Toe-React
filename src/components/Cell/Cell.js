import classNames from "classnames";
import "./Cell.css";

export const Cell = (props) => {
  const cellClasses = classNames({
    cell: true,
    winner: props.canHighlight,
  });

  const cellContentClasses = classNames({
    "cell-content": true,
    populated: props.value,
  });

  return (
    <button className={cellClasses} onClick={props.cellClicked}>
      <span className={cellContentClasses}>{props.value}</span>
    </button>
  );
};
