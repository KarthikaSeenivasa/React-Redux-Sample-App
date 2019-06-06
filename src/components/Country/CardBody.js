import React, { Component } from "react";
import Button from "./Button";

class CardBody extends Component {
  render() {
    let languages = this.props.Languages.map(language => {
      return language.name;
    });
    let currencyCodes = this.props.Currencies.map(currency => {
      return currency.code;
    });
    return (
      <div className="card-body">
        <h2 className="card-header--title">{this.props.CountryName}</h2>
        <div className="countryDetails">
          <h3>Capital : {this.props.Capital}</h3>
          <h3>Currency : {currencyCodes.join(", ")}</h3>
          <div> Languages : {languages.join(", ")}</div>
          <div>Population : {this.props.Population}</div>
        </div>
        <Button CountryName={this.props.CountryName} />
      </div>
    );
  }
}
export default CardBody;
