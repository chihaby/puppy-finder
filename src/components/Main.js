import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { BreedButton } from "./BreedButton";
import ImageList from "./ImageList";
import { AutoSuggest } from "./AutoSuggest";
import axios from "axios";

class Main extends Component {
  state = {
    list: [],
    selectBreed: "",
    buttonValue: "beagle",
    searchResult: [],
    autoList: [],
  };

  componentDidMount = () => {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => {
        const list = res.data.message;
        const autoList = Object.keys(list);
        this.setState({ list, autoList });
        console.log(autoList);
      })
      .catch((err) => {
        console.log("error fetching List");
      });
    axios
      .get(`https://dog.ceo/api/breed/${this.state.buttonValue}/images`)
      .then((res) => {
        const searchResult = res.data.message.slice(0, 6);
        this.setState({ searchResult });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  handleButtonClick = async (event) => {
    this.setState({
      buttonValue: event.target.innerHTML,
    });
    await axios
      .get(`https://dog.ceo/api/breed/${this.state.buttonValue}/images`)
      .then((res) => {
        const searchResult = res.data.message.slice(0, 6);
        this.setState({ searchResult });
      })
      .catch((err) => {
        console.log("error fetching image");
      });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <h1>Dog Breeds</h1>
          <BreedButton
            autoList={this.state.autoList}
            handleButtonClick={this.handleButtonClick}
          />
          <AutoSuggest
            autoList={this.state.autoList}
            // handleDropDownListChange={this.handleDropDownListChange}
            handleSelectList={this.handleSelectList}
          />
          <ImageList searchResult={this.state.searchResult} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Main;

// handleSelectList = (event) => {
//   event.preventDefault();
//   axios
//     .get(`https://dog.ceo/api/breed/${event.target.innerHTML}/images`)
//     .then((res) => {
//       const searchResult = res.data.message.slice(0, 6);
//       this.setState({ searchResult });
//     })
//     .catch((err) => {
//       console.log("error fetching image");
//     });
// };
