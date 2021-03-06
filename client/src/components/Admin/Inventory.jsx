import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from "styled-components";


let Inventory = ({ trayBoxClick, inventory, cropInfo }) => {
  let row = 1
  let column = 0;

//use this for put request
 let trayInfo = {
    crop_id: 0,
    date_planted: 'Soon',
  };

  console.log('THIS IS INV 🫣', inventory);
  return (
    <InventoryContainer>
      {Array.isArray(inventory) ? inventory.map((crop, index) => {
      console.log(crop.crop_id);
        if(column === 3){
          row = row + 1;
          column = 0;
        }
        column = column +1
        return (
          <TrayBox onClick={trayBoxClick} data-tray={index + 1} data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name} row={row} column={column} key={index}>
            <InfoLine data-tray={index + 1}  data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name }>CROP TYPE: {cropInfo[crop.crop_id].crop_name }</InfoLine>
            <InfoLine data-tray={index + 1}  data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name }>DATE PLANTED: {crop.date_planted}</InfoLine>
            <InfoLine data-tray={index + 1}  data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name }>Tray: {index + 1}</InfoLine>
          </TrayBox>  
          );
        })
      : []}
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
  background:#F2DC6B;

  border-radius: 3vmin;
  border: solid;
  border-color: #012E40;
  border-width: .2vmin;
  margin: 2vmin;
  padding: 2vmin;

  font-size: 1vmin;
  :disabled {
    opacity: 0.2;
  }
  :hover {
    box-shadow: 0 0 15px #F2DC6B;
  }
`;
export default Inventory;

/* 

        {trayInfo.crop_type}
        {trayInfo.date_planted}
        {trayInfo.moisture_level}

*/