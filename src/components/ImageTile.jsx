const ImageTile = (props) => {
  return (
    <>
      <img
        src={props.src}
        onClick={() => {
          props.updateCounter(props.index);
          props.shuffleOrder();
        }}
      />
    </>
  );
};

export default ImageTile;
