import { useState } from "react";
import { Card } from "./Card";
import "./CardGrid.css";

export function CardGrid() {
  const [cards, setCards] = useState([
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
    <Card key={crypto.randomUUID()} handler={shuffleCards} />,
  ]);

  function shuffleCards() {
    let shuffled = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return setCards(shuffled);
  }

  return <div className="card-grid">{cards}</div>;
}
