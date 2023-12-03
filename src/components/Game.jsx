import Images from "./Images";
import { useState } from "react";
import { motion } from "framer-motion";
const Game = () => {
  let cards = 9;

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <motion.div className="game">
      <header>
        <span>Score: {score}</span>
        <span>Best Score: {bestScore}</span>
      </header>
      <Images
        score={score}
        setScore={setScore}
        setBestScore={setBestScore}
        cards={cards}
      />
    </motion.div>
  );
};

export default Game;