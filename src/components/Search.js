import React from "react";
import axios from "axios";

class Search extends React.Component {
    state = {
        info: ""
    };

    componentDidMount = () => {
        axios
            .get(`https://api.thedogapi.com/v1/breeds?limit=10&page=0`)
            .then(res => {
                const info = res.data;
                this.setState({ info });
            });
        console.log(this.state.info);
    };

    render() {
        return <h1>INFO</h1>;
    }
}

export default Search;
