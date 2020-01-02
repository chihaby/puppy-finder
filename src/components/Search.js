import React, { Component } from 'react';

class Search extends Component {

  state = {
    inputSearch : ''
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      inputSearch: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const inputSearch = this.state.input;
    this.setState({inputSearch});
    console.log(inputSearch);
  }

  render () {
    return (
      <div>
        <input type='text' name='name' onChange={this.handleChange}/>

        <form onSubmit={this.handleSubmit}>
          <button className='search-button' type="submit">Submit</button>
        </form>

      </div>
    )
  }
}


export default Search;

