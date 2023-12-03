import "./App.scss";
import { useState } from "react";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import cacheImages from "./components/functions/cacheImages";

function App() {
  cacheImages();
  const [isGame, setIsGame] = useState(false);
  return <>{isGame ? <Game /> : <MainMenu setIsGame={setIsGame} />}</>;
}
export default App;
