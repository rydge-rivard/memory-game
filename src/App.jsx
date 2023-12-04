import { CardGrid } from "./components/CardGrid";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  console.log(highScore);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <CardGrid
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
