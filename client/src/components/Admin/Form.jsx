import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import PlantForm from './PlantForm.jsx';


let Form = ({ cropNames, cropClicked, cropSelected, cropId }) => {
  let startFormColumnStart = 2;
  let startFromColumnEnd = 6;

  if (cropSelected) {
    startFormColumnStart = 1;
    startFromColumnEnd = 5;
  }

  return (
    <StartFrom start={startFormColumnStart} end={startFromColumnEnd}>
      {cropSelected ? 
      <PlantForm cropInfo={cropNames[cropId]}/> :
      <SelectCrop onChange={cropClicked}> 
        {cropNames.map(crop => {
          return <InputForm  value={crop.id} key={crop.id}> {crop.crop_name}</InputForm>
        })}
      </SelectCrop>}
     <Button> Plant </Button>
  </StartFrom>
  );
}


const InputForm = styled.option`

`;

const SelectCrop = styled.select`
  grid-column: 2;
  border-radius: 1vmin;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #eee;
  margin-top: 4vmin;

  option {
    color: black;
    background: #eee;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const StartFrom = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 10vmin);
  grid-template-columns: repeat(3, 1fr);
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: ${props => props.start};
  grid-row-end: ${props => props.end};
`;

const Button = styled.button`
  
  grid-column: 2;
  background: #03A63C;
  color: white;
  border-radius: 7px;
  padding: 3vmin;
  margin: 1vmin;
  font-size: 2vmin;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;


export default Form;