import "./Board.css";
import { Cell } from "../Cell/Cell";

export const Board = (props) => {
  return (
    <div id="board">
      {props.cellValues.map((value, index) => {
        const canHighlight =
          props.winningCombination &&
          props.winningCombination.indexOf(index) >= 0;
        return (
          <Cell
            key={index}
            value={value}
            canHighlight={canHighlight}
            cellClicked={() => props.cellClicked(index)}
          />
        );
      })}
    </div>
  );
};
