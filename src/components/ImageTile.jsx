import { useState } from "react";
import LoadingImage from "./LoadingImage";

const ImageTile = (props) => {
  const [loading, setLoading] = useState(true);
  const loadHandler = (e) => {
    setLoading(false);
  };

  return (
    <>
      <LoadingImage display={loading} />
      <img
        src={props.src}
        onLoad={loadHandler}
        className={loading ? "hide" : ""}
        onClick={() => {
          props.updateCounter(props.index);
        }}
      />
    </>
  );
};

export default ImageTile;
