import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  margin: 6px;
  width: 100px;
  height: 35px;
  background-color: white;
  color: #008cba;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 3px 0 3px gray;
  &:hover {
    background-color: #008cba;
    color: white;
  }
`;

export const BreedButton = (props) => (
  <div>
    <Button value="retriever" onClick={props.handleButtonClick}>
      Retriever
    </Button>
    <Button value="bulldog" onClick={props.handleButtonClick}>
      Bulldog
    </Button>
    <Button value="labrador" onClick={props.handleButtonClick}>
      Labrador
    </Button>
    <Button value="germanshepherd" onClick={props.handleButtonClick}>
      Shepherd
    </Button>
    <Button value="mastiff" onClick={props.handleButtonClick}>
      Mastiff
    </Button>
    <Button value="poodle" onClick={props.handleButtonClick}>
      Poodle
    </Button>
    <Button value="rottweiler" onClick={props.handleButtonClick}>
      Rottweiler
    </Button>
    <Button value="boxer" onClick={props.handleButtonClick}>
      Boxer
    </Button>
    <Button value="pug" onClick={props.handleButtonClick}>
      Pug
    </Button>
    <Button value="" onClick={props.handleButtonClick}>
      Chihuahua
    </Button>
    <Button value="corgi" onClick={props.handleButtonClick}>
      Corgi
    </Button>
    <Button value="husky" onClick={props.handleButtonClick}>
      Husky
    </Button>
  </div>
);
