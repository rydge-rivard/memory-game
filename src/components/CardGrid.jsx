/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card } from "./Card";
import "./CardGrid.css";

export function CardGrid({ score, setScore, highScore, setHighScore }) {
  const initCards = [
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
    <Card key={crypto.randomUUID()} handler={clickHandler} clicked={false} />,
  ];

  const [cards, setCards] = useState(initCards);
  let clicked = new Set([]);

  function clickHandler(id) {
    shuffleCards();

    if (clicked.has(id)) {
      gameOver();
    } else {
      clicked = new Set([...clicked, id]);
      setScore(++score);
    }
  }

  function gameOver() {
    alert("Game over, this card was already chosen.");
    score > highScore && setHighScore(score);
    setScore((score = 0));
    clicked = new Set([]);
  }

  function shuffleCards() {
    let shuffled = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return setCards(shuffled);
  }

  return <div className="card-grid">{cards}</div>;
}
