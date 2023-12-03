const ImageTile = (props) => {
  return (
    <>
      <img
        src={props.src}
        onClick={() => {
          props.updateCounter(props.index);
          props.shuffleOrder();
        }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </>
  );
};

export default ImageTile;
