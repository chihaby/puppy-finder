import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class AutoSuggest extends React.Component {

  state = {
    autoList: [],
    autoValue: '',
    autoValueResult: ''
  }

  componentDidMount = async () => {
    await axios.get(`https://dog.ceo/api/breeds/list/all`).then(res => {
      const list = res.data.message;
      const autoList = Object.keys(list);
      this.setState({ autoList });            
  });
  }

  handleClick = (event) => {    
    event.preventDefault();
    this.setState({
      autoValue: event.target.value
    })
    console.log(this.state.autoValue)
      axios.get(`https://dog.ceo/api/breed/hound/images`).then(res => {
        const autoValueResult = res.data.message;
        this.setState({ autoValueResult }); 
        console.log(autoValueResult)
      }
    )
  }
  render() {
    const { autoList } = this.state;

    return (
      <Autocomplete
        id="combo-box-demo"
        options={autoList}
        // getOptionLabel={option => option.title}
        // onChange={this.handleChange}
        onSubmit={this.handleClick}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} onClick={this.handleClick} label="Combo box" variant="outlined" fullWidth />
        )}
    />
    )
  }
}

export default AutoSuggest;