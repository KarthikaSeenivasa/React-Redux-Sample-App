import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CountryCard from "./Country/CountryCard";

class App extends Component {
  constructor(props) {
    super();
    /* set countries[], countryName as empty */
    this.state = {
      countries: [],
      allCountries: [],
      countryName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    /* load all countries data one component mounted */
    axios.get(`https://restcountries.eu/rest/v2/all`).then(resp => {
      this.setState({
        countries: resp.data,
        allCountries: resp.data
      });
    });
  }

  /* get data from API based on the enterted country name */
  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.countryName;
    const url = "https://restcountries.eu/rest/v2/name/" + name;
    axios.get(url).then(resp => {
      this.setState({
        countries: resp.data
      });
    });
  }

  /* once user enters the value in textbox set that in state */
  handleChange(event) {
    if (event.target.value === "") {
      this.setState({
        countryName: event.target.value,
        countries: this.state.allCountries
      });
    } else {
      this.setState({
        countryName: event.target.value
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Countries Of The World</h1>
        </header>
        <form className="form-inline col-md-12" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="countryName"
            className="searchBox"
            value={this.state.countryName}
            onChange={this.handleChange.bind(this)}
            placeholder="Search by Country Name"
            required
          />
          <button type="submit" className="btn btn-default btnSearch">
            Search
          </button>
        </form>
        <CountryCard Countries={this.state.countries} />;
      </div>
    );
  }
}

export default App;
