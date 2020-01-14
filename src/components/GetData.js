import React, { Component } from "react";
import { Form } from "./Form";
import { ButtonList } from "./ButtonList";
import { RandomButtons } from "./RandomButtons";
import { ImageDiv } from "./ImageDiv";
import  AutoSuggest  from './AutoSuggest';
import axios from "axios";
import styled from "styled-components";

export const Button = styled.button`
    height: 30px;
    width: 100px;
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
    background: tomato;
    margin: 10px 10px 20px 10px;
`;

class GetData extends Component {
    state = {
        searchInput: "",
        buttonValue: "",
        rdmButtonvalues: [],
        searchResult: [],
        list: [],
        autoList: []
    };

    componentDidMount = async () => {
        await axios.get(`https://dog.ceo/api/breeds/list/all`).then(res => {
            const list = res.data.message;
            const autoList = Object.keys(list);
            this.setState({ list, autoList });
            this.randomizeButtonValues();            
        });
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const buttonValue = event.target.innerHTML;
        const { searchInput } = this.state;

        if (searchInput) {
            axios
                .get(`https://dog.ceo/api/breed/${searchInput}/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
                });
        }

        if (buttonValue) {
            axios
                .get(`https://dog.ceo/api/breed/${buttonValue}/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
                });
        } else {
            console.log('nothing clicked')
        }
    };

    randomizeButtonValues = () => {
        let rdmButtonvalues = [];
        for (var i = 0; i < 9; i++) {
            const rdmNumber = Object.keys(this.state.list)[
                Math.floor(Math.random() * Object.keys(this.state.list).length)
            ];
            rdmButtonvalues.push(rdmNumber);
        }
        this.setState({ rdmButtonvalues });
    };

    render() {
        return (
            <div>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <AutoSuggest 
                    autoList={this.state.autoList}
                    handleSubmit={this.handleSubmit}
                />
                <ButtonList
                    list={this.state.list}
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

export default GetData;
