import { useState } from "react";
import Dice from "./Dice";
import "./RollDice.css";

const RollDice = () => {
  const sides = ["one", "two", "three", "four", "five", "six"];
  const [dice1, setDice1] = useState(sides[0]);
  const [dice2, setDice2] = useState(sides[0]);
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    setIsRolling(true);
    const newDice1 = sides[Math.floor(Math.random() * sides.length)];
    const newDice2 = sides[Math.floor(Math.random() * sides.length)];

    setTimeout(() => {
      setDice1(newDice1);
      setDice2(newDice2);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="dices-container">
      <div className={`dices ${isRolling ? "rolling" : ""}`}>
        <Dice name={dice1} />
        <Dice name={dice2} />
      </div>

      <button onClick={roll} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Throw the dice"}
      </button>
    </div>
  );
};

export default RollDice;
