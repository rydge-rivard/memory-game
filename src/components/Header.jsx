/* eslint-disable react/prop-types */
import "./Header.css";
import { Score } from "./Score";

export function Header({ score, highScore }) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div>
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </div>
      <Score score={score} highScore={highScore} />
    </div>
  );
}
