import ImageTile from "./ImageTile";
import { useState } from "react";
const Images = (props) => {
  const generateOrder = () => {
    const order = [];
    for (let i = 0; i < props.cards; i++) {
      let random = Math.floor(Math.random() * 18 + 1);
      while (order.includes(random)) {
        random = Math.floor(Math.random() * 18 + 1);
      }
      order.push(random);
    }
    return order;
  };

  const shuffleOrder = () => {
    setOrder(generateOrder());
  };

  const [order, setOrder] = useState(generateOrder());

  const [imagesCounter, setImagesCounter] = useState(new Array(19).fill(0));
  const updateCounter = (index) => {
    imagesCounter[index]++;
    if (imagesCounter[index] < 2) {
      props.setScore((prevScore) => prevScore + 1);
    } else {
      imagesCounter.fill(0);
      props.setBestScore((prevBestScore) => {
        if (props.score > prevBestScore) {
          return props.score;
        } else {
          return prevBestScore;
        }
      });
      props.setScore(0);
    }
  };

  return (
    <div className="images_container">
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
