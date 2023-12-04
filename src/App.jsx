import { CardGrid } from "./components/CardGrid";

function App() {
  return (
    <>
      <h1>Memory Game</h1>
      <div>
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </div>
      <CardGrid />
    </>
  );
}

export default App;

// async function getDuck() {
//   try {
//     const response = await fetch(`https://random-d.uk/api/v2/random`);
//     const duck = await response.json();
//     setURL(duck.url);
//   } catch (err) {
//     console.log(err);
//   }
// }
