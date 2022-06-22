import React, { useState, useEffect } from 'react';
import styled from "styled-components";


let Inventory = ({ trayBoxClick, inventory }) => {
  let row = 1
  let column = 0;

  let trayInfo = {
    crop_type: 'Soon',
    date_planted: 'Soon',
    moisture_level: 'None',
  };

  return (
    <InventoryContainer>
      {inventory.map((crop) => {
        if(column === 3){
          row = row + 1;
          column = 0;
        }
        column = column +1
        return (
          <TrayBox onClick={trayBoxClick} row={row} column={column}>
            <InfoLine >CROP TYPE: {trayInfo.crop_type}</InfoLine>
            <InfoLine >DATE PLANTED: {trayInfo.date_planted}</InfoLine>
            <InfoLine >MOISTURE LEVEL: {trayInfo.moisture_level}</InfoLine>
          </TrayBox>  
          );
        })
      }

    </InventoryContainer>
  );

};

const InventoryContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1.5fr);
  grid-template-columns: repeat(3, 1fr);

  grid-column: 1 / 6;
  grid-row: 2 / 9;
`;

const InfoLine = styled.span`
  font-size: 1.7vmin;
`;

const TrayBox = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  background: white;

  border-radius: 3vmin;
  border: solid;
  border-color: gray;
  border-width: .2vmin;
  margin: 2vmin;
  padding: 2vmin;

  font-size: 1vmin;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;
export default Inventory;

/* 

        {trayInfo.crop_type}
        {trayInfo.date_planted}
        {trayInfo.moisture_level}

*/