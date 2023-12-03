import Images from "./Images";
import { useState } from "react";
import { motion } from "framer-motion";
import Attribution from "./Attribution";
const Game = () => {
  let cards = 9;

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <motion.div
      className="game"
      animate={{ opacity: [0, 1], transition: { duration: 1 } }}
    >
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
      <Attribution />
    </motion.div>
  );
};

export default Game;
