import ImageTile from "./ImageTile";
import { useState } from "react";
const Images = (props) => {
  const images = [];
  const [imagesCounter, setImagesCounter] = useState(new Array(8).fill(0));
  const updateCounter = (index) => {
    imagesCounter[index]++;
    console.log(imagesCounter[index]);
    if (imagesCounter[index] < 2) {
      props.setScore((prevScore) => prevScore + 1);
    } else {
      setImagesCounter(new Array(8).fill(0));
      props.setScore(0);
    }
  };
  for (let i = 0; i < 8; i++) {
    images.push(
      <ImageTile
        src={props.src + "&random=" + i + "x"}
        key={i}
        index={i}
        updateCounter={updateCounter}
      />
    );
  }
  return <div className="images_container">{images}</div>;
};

export default Images;
