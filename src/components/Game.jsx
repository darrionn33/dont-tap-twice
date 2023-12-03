import Images from "./Images";
import { useState } from "react";
import { motion } from "framer-motion";
import Attribution from "./Attribution";
const Game = () => {
  let cardStarter = 6;
  if (window.matchMedia("(min-width: 940px)").matches) {
    cardStarter = 8;
  }
  const [cards, setCards] = useState(cardStarter);

  window.onresize = () => {
    if (window.matchMedia("(min-width: 940px)").matches) {
      setCards(8);
    }
    if (window.matchMedia("(max-width: 939px)").matches) {
      setCards(6);
    }
  };

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <motion.div
      className="game"
      animate={{ opacity: [0, 1], transition: { duration: 0.1, delay: 0.5 } }}
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
