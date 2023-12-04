import "./App.scss";
import { useState, createContext } from "react";
import { AnimatePresence } from "framer-motion";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import cacheImages from "./components/functions/cacheImages";

export const GameContext = createContext(null);

function App() {
  cacheImages();
  const [isGame, setIsGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <GameContext.Provider
      value={{
        setGameOver,
        score,
        setScore,
        bestScore,
        setBestScore,
        lastScore,
        setLastScore,
      }}
    >
      <AnimatePresence mode="sync">
        {isGame ? (
          <Game key="game_key" />
        ) : (
          <MainMenu setIsGame={setIsGame} key="main_menu_key" />
        )}
        {gameOver ? (
          <GameOver setGameOver={setGameOver} key="game_over_key" />
        ) : (
          ""
        )}
      </AnimatePresence>
    </GameContext.Provider>
  );
}
export default App;
