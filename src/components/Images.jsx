import { useAnimate } from "framer-motion";
import ImageTile from "./ImageTile";
import { useContext, useState } from "react";
import { GameContext } from "../App";
const Images = (props) => {
  const setGameOver = useContext(GameContext).setGameOver;
  const score = useContext(GameContext).score;
  const setScore = useContext(GameContext).setScore;
  const setLastScore = useContext(GameContext).setLastScore;
  const setBestScore = useContext(GameContext).setBestScore;

  const generateUniqueOrder = (oldOrder) => {
    const generatedOrder = [];
    const generateOrder = () => {
      generatedOrder.length = 0;
      for (let i = 0; i < props.cards; i++) {
        let random = Math.floor(Math.random() * 18 + 1);
        while (generatedOrder.includes(random)) {
          random = Math.floor(Math.random() * 18 + 1);
        }
        generatedOrder.push(random);
      }
    };
    generateOrder();
    if (generatedOrder === oldOrder) {
      generateOrder;
    }
    return generatedOrder;
  };

  const [scope, animate] = useAnimate();

  const [order, setOrder] = useState(generateUniqueOrder());

  const shuffleOrder = () => {
    setOrder(generateUniqueOrder(order));
    animate(scope.current, {
      opacity: [0, 1],
    });
  };

  const [imagesCounter, setImagesCounter] = useState(new Array(19).fill(0));
  const updateCounter = (index) => {
    imagesCounter[index]++;
    if (imagesCounter[index] < 2) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setGameOver(true);
      imagesCounter.fill(0);
      setBestScore((prevBestScore) => {
        if (score > prevBestScore) {
          return score;
        } else {
          return prevBestScore;
        }
      });
      setLastScore(score);
      setScore(0);
    }
  };

  return (
    <div className="images_container" ref={scope}>
      {order.map((item, index) => {
        if (index < props.cards) {
          return (
            <ImageTile
              src={"/dont-tap-twice/kets/" + item + ".png"}
              key={item}
              index={item}
              updateCounter={updateCounter}
              shuffleOrder={shuffleOrder}
            />
          );
        }
      })}
    </div>
  );
};

export default Images;
