import { useState } from "react";

import "./Game.css";
import { Board } from "../Board/Board";
import { Result } from "../Result/Result";
import { calculateWinner } from "../../utils/WinnerCalculator";

export const Game = () => {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [turnsLeft, setTurnsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const onCellClick = (cellIndex) => {
    if (!cellValues[cellIndex]) {
      const newValues = [...cellValues];
      newValues[cellIndex] = xIsNext ? "X" : "O";

      const getResult = calculateWinner(newValues, cellIndex, turnsLeft - 1);

      setCellValues(newValues);
      setXIsNext(!xIsNext);
      setTurnsLeft(turnsLeft - 1);
      setIsGameOver(getResult.hasResult);
      setWinner(getResult.winner);
      setWinningCombination(getResult.winningCombination);
    }
  };

  const restartGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setIsGameOver(false);
    setTurnsLeft(9);
    setWinner();
    setWinningCombination([]);
  };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={onCellClick}
        />
      </div>

      <Result isGameOver={isGameOver} winner={winner} newGame={restartGame} />
    </>
  );
};
