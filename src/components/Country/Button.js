import React, { Component } from "react";

class Button extends Component {
  render() {
    /* form eiki url here based on countryname */
    const wikiUrl = "https://en.wikipedia.org/wiki/" + this.props.CountryName;
    return (
      <button className="button button-primary">
        <a href={wikiUrl} target="_blank">
          <i className="fa fa-chevron-right" /> Find out more
        </a>
      </button>
    );
  }
}
export default Button;
