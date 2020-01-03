import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  height: 30px;
  width: 100px;
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  background: tomato;
  margin: 10px 10px 20px 10px;
`

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

class GetData extends Component {
  state = {
    list: [],
    randomImg: '',
    listImg: [],
    subBreed: []
  }

  componentDidMount = () => {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(res => {
      const list = res.data.message;
      this.setState({ list });
    })
  }

  handleClick = event => {

    event.preventDefault();
    const buttonValue = event.target.innerHTML;

    axios.get(`https://dog.ceo/api/breed/${buttonValue}/images/random`)
    .then(res => {
      const randomImg = res.data.message;
      this.setState({randomImg});
    })

    axios.get(`https://dog.ceo/api/breed/${buttonValue}/images`)
    .then(res => {
      const listImg = res.data.message.slice(0,22);
      this.setState({listImg});
    }) 
    
    axios.get(`https://dog.ceo/api/breed/${buttonValue}/list`)
    .then(res => {
      const subBreed = res.data.message;
      this.setState({subBreed});
    }) 
  }



  render () {

    const { list, randomImg, listImg, subBreed } = this.state; 
    
    return (
      <div>

        <div>        
          {Object.keys(list).map(breed => 
            <Button onClick={this.handleClick}>
                {breed}
            </Button>
          ).slice(0,24)}       
        </div>

        <div>
          {<h1>Random image of the breed</h1>}
          <img src={randomImg} alt={""} style={{ height: "200px", width: "200px", borderRadius: "10%"}}/>
        </div>

        <div>
          {<h1>List of the breed images</h1>}
        </div>

        <div>
          {listImg.map(image => {
            return <img src={image} alt={""} style={{ height: "100px", width: "100px", borderRadius: "20%"}}/>
            // Insert styled component instead
            // return <ImageBox src={image}/> 
          })}
        </div>

        <div>
          <h1>List of sub breeds</h1>
          {this.props.searchInput}
          <ul>
            {subBreed.map(oneSubBreed => {
              return <li>{oneSubBreed}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default GetData;


