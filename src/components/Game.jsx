import Images from "./Images";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import Attribution from "./Attribution";
import { GameContext } from "../App";
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

  const score = useContext(GameContext).score;
  const bestScore = useContext(GameContext).bestScore;

  return (
    <motion.div
      className="game"
      animate={{ opacity: [0, 1], transition: { duration: 0.1, delay: 0.5 } }}
    >
      <header>
        <span>Score: {score}</span>
        <span>Best Score: {bestScore}</span>
      </header>
      <Images cards={cards} />
      <Attribution />
    </motion.div>
  );
};

export default Game;
