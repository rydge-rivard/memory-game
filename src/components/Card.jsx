/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Card.css";
import { useEffect } from "react";

export function Card({ handler }) {
  const [url, setURL] = useState("");

  async function getDuck() {
    try {
      const response = await fetch(`https://random-d.uk/api/v2/random`);
      const duck = await response.json();
      setURL(duck.url);
    } catch (err) {
      console.log(err);
    }
    return url;
  }

  useEffect(() => {
    getDuck();
  }, []);

  return (
    <div className="card" onClick={handler}>
      <img src={url} />
    </div>
  );
}
