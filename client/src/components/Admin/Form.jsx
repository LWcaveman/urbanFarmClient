import React, { useState, useEffect } from 'react';
import styled from "styled-components";


let Form = ({ cropNames }) => {
   const [cropSelected, setCropSelected] = useState(false);

  let cropClicked = (e) => {
    setCropSelected(true);
  } 

  return (
    <StartFrom>
      {cropSelected ?  <Button> Plant </Button>  : 
      <SelectCrop> 
        {cropNames.map(crop => {
          return <InputForm key={crop.id}> {crop.crop_name}</InputForm>
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

const StartFrom = styled.form`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-column: 2 /5;
  grid-row: 2 /6;
`;

const Button = styled.button`
  grid-row: 3;
  grid-column: 2;
  background: green;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;


export default Form;