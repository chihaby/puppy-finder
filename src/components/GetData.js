import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
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
        searchInputArray: [],
        list: [],
        listImg: []
    };

    componentDidMount = () => {
        axios.get(`https://dog.ceo/api/breeds/list/all`).then(res => {
            const list = res.data.message;
            this.setState({ list });
            console.log(list);
        });
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        const { searchInput } = this.state;
        this.setState({ searchInput });
        axios
            .get(`https://dog.ceo/api/breed/${searchInput}/images`)
            .then(res => {
                const searchInputArray = res.data.message.slice(0, 9);
                this.setState({ searchInputArray });
                console.log(searchInputArray);
        })
    }

    handleButtonClick = event => {
        event.preventDefault();
        const buttonValue = event.target.innerHTML;
        axios
            .get(`https://dog.ceo/api/breed/${buttonValue}/images`)
            .then(res => {
                const listImg = res.data.message.slice(0, 9);
                this.setState({ listImg });
            });
    };

    render() {
        const { searchInputArray ,list, listImg } = this.state;

        return (
            <div>

                {/* Search Input field */}
                <div>
                    <form
                            style={{
                                textAlign: "center",
                                marginTop: "20px",
                                marginBottom: "20px"
                            }}
                            onSubmit={this.handleSearchSubmit}
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

                {/* 24 Buttons */}
                <div>
                    {Object.keys(list)
                        .map(breed => (
                            <Button onClick={this.handleButtonClick}>{breed}</Button>
                        ))
                        .slice(0, 24)}
                </div>

                <div>
                    <h1>List of the breed images by search</h1>
                    {searchInputArray.map(oneSearch => {
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

                {/* List of images */}
                <div>
                    <h1>List of the breed images</h1>
                    {listImg.map(image => {
                        return (
                            <img
                                src={image}
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




// const ImageBox = styled.image`
//   display: flex;
//   justify-content: center; /* align horizontal */
//   align-items: center;
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -moz-box;
//   display: -ms-flexbox;
//   -webkit-flex-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   border-radius: 50%;
// `