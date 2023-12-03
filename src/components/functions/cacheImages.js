const cacheImages = () => {
  for (let i = 1; i < 19; i++) {
    let image = new Image();
    image.src = "/kets/" + i + ".png";
    image.style.display = "none";
    document.body.append(image);
  }
};

export default cacheImages;
