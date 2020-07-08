import React, { Component } from "react";
import { ButtonList } from "./ButtonList";
import { ImageDiv } from "./ImageDiv";
import { AutoSuggest } from "./AutoSuggest";
import axios from "axios";

class Main extends Component {
  state = {
    dropDownListValue: "",
    dropDownListResult: "",
    buttonValue: "",
    searchResult: [],
    list: [],
    autoList: [],
  };

  componentDidMount = () => {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => {
        this.setState({ list: res.data.message });
        this.handleList();
      })
      .catch((err) => {
        console.log("error fetching List");
      });
  };

  handleList = () => {
    const autoList = Object.keys(this.state.list);
    this.setState({ autoList });
    this.randomizeButtonValues();
  };

  handleDropDownListChange = (event) => {
    event.preventDefault();
    this.setState({
      dropDownList: event.target.innerHTML,
    });
  };

  handleDropDownListSelect = () => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.dropDownList}/images`)
      .then((res) => {
        const searchResult = res.data.message.slice(0, 6);
        this.setState({ searchResult });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const buttonValue = event.target.innerHTML;
    if (buttonValue) {
      axios
        .get(`https://dog.ceo/api/breed/${buttonValue}/images`)
        .then((res) => {
          const searchResult = res.data.message.slice(0, 2);
          this.setState({ searchResult });
        })
        .catch((err) => {
          console.log("error fetching image");
        });
    }
  };

  render() {
    return (
      <div>
        <AutoSuggest
          autoList={this.state.autoList}
          handleDropDownListChange={this.handleDropDownListChange}
          handleDropDownListSelect={this.handleDropDownListSelect}
        />
        <ButtonList
          autoList={this.state.autoList}
          handleSubmit={this.handleSubmit}
        />
        <ImageDiv searchResult={this.state.searchResult} />
      </div>
    );
  }
}

export default Main;
