import { CardGrid } from "./components/CardGrid";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <CardGrid />
    </>
  );
}

export default App;
