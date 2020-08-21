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
    <Button>Retriever</Button>
    <Button>Bulldog</Button>
    <Button>Labrador</Button>
    <Button>Shepherd</Button>
    <Button>Pitbull</Button>
    <Button>Poodle</Button>
    <Button>Rottweiler</Button>
    <Button>Boxer</Button>
    <Button>Pug</Button>
    <Button>Chihuahua</Button>
    <Button>Dachshunds</Button>
    <Button>Husky</Button>
  </div>
);

// {props.autoList
//     .map((breed) => (
//       <Button key={breed} onClick={props.handleButtonClick}>
//         {breed}
//       </Button>
//     ))
//     .slice(10, 22)}
