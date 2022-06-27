import React, { useState, useEffect } from 'react';
import styled from "styled-components";


let Harvest = ({ harvestedInfo, clickHarvest }) => {

  return (
    <>
      <Button onClick={clickHarvest} > Harvest {harvestedInfo[1]}</Button>
    </>
  );
};

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

export default Harvest;

