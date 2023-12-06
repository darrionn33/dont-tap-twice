import { Component } from "react";

class ImageTile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img
        src={this.props.src}
        onClick={() => {
          this.props.updateCounter(this.props.index);
          this.props.shuffleOrder();
        }}
        onContextMenu={(e) => e.preventDefault()}
      />
    );
  }
}

export default ImageTile;
