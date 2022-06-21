import React, { useEffect } from 'react';
import styled from "styled-components";

//use an on change with select to hide and unhide the button
//pass props to the button for location based on rows
//use index to figure out where to put the other info needed

function Admin() {
  let crops = ['Crop Type', 'Mustard'];
  return (
    <AdminContainer>
      <Header>What are You Planting Today?</Header>
      <StartFrom>
        <SelectCrop> 
          {crops.map(item => {
            return <InputForm > {item}</InputForm>
          })}
        </SelectCrop>
        <Button> Plant </Button>
      </StartFrom>
    </AdminContainer>
  );

}
 /* grid-template-columns: 1fr; */
const AdminContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 2fr 1fr;
  grid-column: 3;
  grid-row: 2;
`;

const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 4;
`;

const InputForm = styled.option`

`;

const SelectCrop = styled.select`
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
  grid-column: 2;
  grid-row: 2 /6;
`;

const Button = styled.button`

  grid-row: 3;
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

export default Admin;

/* 

border-radius: 1vmin;
border-top-style: hidden;
border-right-style: hidden;
border-left-style: hidden;
border-bottom-style: groove;
background-color: #eee;
margin-top: 4vmin;

  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: solid;
  margin-left: 10px;

*/