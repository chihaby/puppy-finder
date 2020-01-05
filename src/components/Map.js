import React from "react";
import axios from 'axios';

class Map extends React.Component {
    state = {
        geo: ''
    }

    componentDidMount = () => {
        axios.get('https://api.tomtom.com/search/2/geocode/4%20north%202nd%20street%20san%20jose.json?storeResult=false&typeahead=false&limit=5&countrySet=US&lat=37.337&lon=-121.89&radius=1000&topLeft=37.553%2C-122.453&btmRight=37.4%2C-122.55&language=NGT&extendedPostalCodesFor=Geo&key=viqmo0KJLTdXPV07rTvdjCvR5bTJJWo8')
        .then(res => {
            const geo = res.data;
            this.setState({ geo });
            console.log(geo);
            console.log(typeof(geo));
        })
    }

    render (){
        const { geo } = this.state;

        return (
            <div>
                {Object.keys(geo).map(location => (
                    <div>{location}</div>
                ))}
            </div>
        )
}
}

export default Map;
