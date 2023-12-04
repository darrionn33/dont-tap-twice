import { motion } from "framer-motion";
import { GameContext } from "../App";
import { useContext } from "react";
const GameOver = () => {
  const lastScore = useContext(GameContext).lastScore;
  const bestScore = useContext(GameContext).bestScore;
  const setGameOver = useContext(GameContext).setGameOver;

  return (
    <motion.div className="game_over_backdrop" exit={{ opacity: 0 }}>
      <motion.div
        className="game_over"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.1 } }}
      >
        <p>GAME OVER!</p>

        <p>You scored {lastScore}!</p>
        {lastScore >= bestScore ? (
          <p>That's the best score...yet!</p>
        ) : (
          <p>Try again!</p>
        )}
        <button
          onClick={() => {
            setGameOver(false);
          }}
        >
          PLAY AGAIN
        </button>
      </motion.div>
    </motion.div>
  );
};

export default GameOver;
