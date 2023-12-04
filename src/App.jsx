import { CardGrid } from "./components/CardGrid";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
