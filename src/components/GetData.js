import React, { Component } from "react";
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
        searchInput: '',
        buttonValue: '',
        searchResult: [],
        list: []
    };

    componentDidMount = () => {
        axios.get(`https://dog.ceo/api/breeds/list/all`).then(res => {
            const list = res.data.message;
            this.setState({ list });
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
                .get(`https://dog.ceo/api/breed/${ searchInput }/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
            })
        } 

        if (buttonValue) {
            axios
                .get(`https://dog.ceo/api/breed/${ buttonValue }/images`)
                .then(res => {
                    const searchResult = res.data.message.slice(0, 9);
                    this.setState({ searchResult });
            })
        }
    }

    render() {
        const { searchResult ,list } = this.state;

        return (

            <div>
                {/* Input form */}
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

                {/* 9 Buttons from list object */}
                <div>
                    {Object.keys(list)
                        .map(breed => (
                            <Button onClick={this.handleSubmit}>{breed}</Button>
                        ))
                        .slice(0, 22)}
                </div>

                {/* Image div */}
                <div>
                    <h1>List of images</h1>
                    {searchResult.map(oneSearch => {
                        return (
                            <img
                                src={oneSearch}
                                alt={""}
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    borderRadius: "20%"
                                    }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}


export default GetData;
