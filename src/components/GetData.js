import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  background: tomato;
  margin: 0px 5px 20px 5px;
`

const ImageBox = styled.image`
  height: 20px;
  width: 20px;
`

class GetData extends Component {
  state = {
    list: [],
    randomImg: '',
    listImg: [],
  }

  componentDidMount = () => {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(res => {
      const list = res.data.message;
      this.setState({ list });
      console.log(list);
    })
  }

  handleClick = event => {

    event.preventDefault();
    const buttonValue = event.target.innerHTML;

    axios.get(`https://dog.ceo/api/breed/${buttonValue}/images/random`)
    .then(res => {
      const randomImg = res.data.message;
      this.setState({randomImg});
      console.log(randomImg);
    })

    axios.get(`https://dog.ceo/api/breed/${buttonValue}/images`)
    .then(res => {
      const listImg = res.data.message;
      this.setState({listImg});
      console.log(listImg);
      console.log(typeof(listImg));
    })

    
  }



  render () {
    const { list, randomImg, listImg } = this.state; 
    
    return (
      <div>

        <div>        
          {Object.keys(list).map(breed => 
            <Button onClick={this.handleClick}>
                {breed}
            </Button>
          )}       
        </div>

        <div>
          <img src={randomImg} alt={"img"}/>
        </div>

        <div>
          {<h5>list-------------------------------------list</h5>}
        </div>

        <div>
          {listImg.map(image => {
            return <img src={image} alt='image list'/>
          })}
        </div>
      </div>
    )
  }
}

export default GetData;


