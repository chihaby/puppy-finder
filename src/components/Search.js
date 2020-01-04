import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Search extends Component {
    state = {
        searchInput: ""
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { searchInput } = this.state;
        this.setState({ searchInput });
        console.log(searchInput);

        axios
            .get(`https://dog.ceo/api/breed/${searchInput}/images/random`)
            .then(res => {
                const searchInput = res.data.message;
                this.setState({ searchInput });
            });
    };

    render() {
        const { searchInput } = this.state;

        return (
            <div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/map">Map</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

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
                    <div>
                        <img
                            src={searchInput}
                            alt={""}
                            style={{
                                height: "250px",
                                width: "250px",
                                borderRadius: "10%"
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
