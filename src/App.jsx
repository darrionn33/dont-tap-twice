import "./App.scss";
import { useState } from "react";
import Images from "./components/Images";

function App() {
  const [src, setSrc] = useState("https://loremflickr.com/200/300/kitten");
  const [score, setScore] = useState(0);
  return (
    <>
      <header>Score:{score}</header>
      <Images src={src} setScore={setScore} />
    </>
  );
}
export default App;
