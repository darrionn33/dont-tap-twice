import "./App.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import cacheImages from "./components/functions/cacheImages";

function App() {
  cacheImages();
  const [isGame, setIsGame] = useState(false);
  return (
    <AnimatePresence mode="sync">
      {isGame ? (
        <Game key="game_key" />
      ) : (
        <MainMenu setIsGame={setIsGame} key="main_menu_key" />
      )}
    </AnimatePresence>
  );
}
export default App;
