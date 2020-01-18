import React, { Component } from "react";
import { ButtonList } from "./ButtonList";
import { RandomButtons } from "./RandomButtons";
import { ImageDiv } from "./ImageDiv";
import { AutoSuggest } from "./AutoSuggest";
import axios from "axios";

class Main extends Component {
    state = {
        dropDownListValue: "",
        dropDownListResult: "",
        buttonValue: "",
        rdmButtonvalues: [],
        searchResult: [],
        list: [],
        autoList: []
    };

    componentDidMount = () => {
        axios.get(`https://dog.ceo/api/breeds/list/all`).then(res => {
            const list = res.data.message;
            const autoList = Object.keys(list);
            this.setState({ autoList });
            this.randomizeButtonValues();
        });
    };

    handleDropDownListChange = event => {
        event.preventDefault();
        this.setState({
            dropDownList: event.target.innerHTML
        });
    };

    handleDropDownListSelect = () => {
        axios
            .get(`https://dog.ceo/api/breed/${this.state.dropDownList}/images`)
            .then(res => {
                const searchResult = res.data.message.slice(0, 9);
                this.setState({ searchResult });
            });
    };

    handleSubmit = event => {
        event.preventDefault();
        const buttonValue = event.target.innerHTML;
        if (buttonValue) {
            axios
                .get(`https://dog.ceo/api/breed/${buttonValue}/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
                });
        }
    };

    randomizeButtonValues = () => {
        let rdmButtonvalues = [];
        for (var i = 0; i < 9; i++) {
            const rdmNumber = this.state.autoList[
                Math.floor(
                    Math.random() * Object.keys(this.state.autoList).length
                )
            ];
            rdmButtonvalues.push(rdmNumber);
        }
        this.setState({ rdmButtonvalues });
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
                <RandomButtons
                    handleSubmit={this.handleSubmit}
                    rdmButtonvalues={this.state.rdmButtonvalues}
                    randomizeButtonValues={this.randomizeButtonValues}
                />
                <ImageDiv searchResult={this.state.searchResult} />
            </div>
        );
    }
}

export default Main;
