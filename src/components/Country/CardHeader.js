import React, { Component } from "react";

class CardHeader extends Component {
  render() {
    const image = this.props.Image;
    var style = {
      backgroundImage: "url(" + image + ")"
    };
    return <header style={style} id={image} className="card-header" />;
  }
}
export default CardHeader;
