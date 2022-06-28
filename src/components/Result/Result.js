import classNames from "classnames";
import "./Result.css";

export const Result = (props) => {
  const resultClasses = classNames({
    "modal-open": props.isGameOver,
  });

  const message = props.winner ? `${props.winner} wins` : "It's a tie";

  return (
    <div id="modal-overlay" className={resultClasses}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{message}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={props.newGame}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};
