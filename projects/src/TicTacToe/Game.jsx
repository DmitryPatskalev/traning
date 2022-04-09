import React from "react";
import Board from "./Board";
import css from "./style.module.css";
class Game extends React.Component {
  render() {
    return (
      <div className={css.game}>
        <div className={css.gameBoard}>
          <Board />
        </div>
        <div className={css.gameInfo}>
          <div></div>
          <ol></ol>
        </div>
      </div>
    );
  }
}

export default Game;
