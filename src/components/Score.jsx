/* eslint-disable react/prop-types */
export function Score({ score, highScore }) {
  return (
    <div className="scoreboard">
      <div>Current Score: {score}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
}
