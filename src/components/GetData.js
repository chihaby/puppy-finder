import React, { Component } from "react";
import { ImageDiv } from "./ImageDiv";
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

export const RdmButton = styled.button`
    height: 30px;
    width: 100px;
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
    background: -o-repeating-linear-gradient();
    margin: 10px 10px 20px 10px;
`;

class GetData extends Component {
    state = {
        searchInput: "",
        buttonValue: "",
        rdmButtonvalues: [],
        searchResult: [],
        list: []
    };

    componentDidMount = async () => {
        await axios.get(`https://dog.ceo/api/breeds/list/all`).then(res => {
            const list = res.data.message;
            this.setState({ list });
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
        }
    };

    randomizeButtonValues = () => {
        let rdmButtonvalues = [];
        for (var i = 0; i < 9; i++) {
            var rdmNumber = Object.keys(this.state.list)[
                Math.floor(Math.random() * Object.keys(this.state.list).length)
            ];
            rdmButtonvalues.push(rdmNumber);
        }
        this.setState({ rdmButtonvalues });
    };

    render() {
        const { searchResult, list, rdmButtonvalues } = this.state;
        return (
            <div>
                <div>
                    <form
                        style={{
                            textAlign: "center",
                            marginTop: "20px",
                            marginBottom: "20px"
                        }}
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                        <button className="search-button" type="submit">
                            Submit
                        </button>
                    </form>
                </div>

                <div>
                    <h1>Constant list</h1>
                    {Object.keys(list)
                        .map(breed => (
                            <Button onClick={this.handleSubmit}>{breed}</Button>
                        ))
                        .slice(1, 9)}
                </div>

                <div>
                    <button onClick={this.randomizeButtonValues}>
                        Click for random list
                    </button>
                </div>

                <div>
                    {rdmButtonvalues
                        .map(breed => (
                            <RdmButton onClick={this.handleSubmit}>
                                {breed}
                            </RdmButton>
                        ))
                        .slice(1, 9)}
                </div>

                <ImageDiv searchResult={this.state.searchResult} />
            </div>
        );
    }
}

export default GetData;
