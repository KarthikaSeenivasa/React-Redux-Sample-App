import React, { Component } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

class CountryCard extends Component {
  render() {
    /* get countries array from props and iterate here */
    let countries = this.props.Countries.map(country => {
      return (
        <div className="card" tabindex="1">
          <CardHeader Image={country.flag} CountryName={country.name} />
          <CardBody
            Capital={country.capital}
            Population={country.population}
            Currencies={country.currencies}
            Languages={country.languages}
            CountryName={country.name}
          />
        </div>
      );
    });
    return <ul className="cardsList">{countries}</ul>;
  }
}
export default CountryCard;
