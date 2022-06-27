import React from 'react';
import styled from "styled-components";

let ComingSoon = ({ inventory, cropInfo }) => {
  let row = 1
  let column = 1;

  let getPlanted = () => {
    let planted = [];
    for (let i = 0; i < inventory.length; i++) {
      console.log('Inventory id: ',inventory[i].crop_id)
      if (inventory[i].crop_id > 0) {
      //console.log(cropInfo[i]);
        planted.push(inventory[i]);
      }
    }
    console.log(planted);
    return planted;
  }

  inventory.length ? getPlanted() : null;

  console.log('Inventory: ',inventory.length ? getPlanted() : []);
  return (
    <ComingSoonContainer>
        <ComingSoonHeader> Here's What's Growing </ComingSoonHeader>
        <ComingSoonDisplay>
        {inventory.length ? getPlanted().map((crop, index) => {
                  
        if(column === 5){
          row = row + 1;
          column = 1;
        }
        column = column +1
        return (
          <TrayBox data-tray={index + 1} data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name} row={row} column={column} key={index}>
            <InfoLine data-tray={index + 1}  data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name}>CROP TYPE: {crop.crop_id ? cropInfo[crop.crop_id].crop_name : 'Soon'}</InfoLine>
            <InfoLine data-tray={index + 1}  data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name}>DATE PLANTED: {crop.date_planted}</InfoLine>
            <InfoLine data-tray={index + 1}  data-cropid={crop.id} data-cropname={cropInfo[crop.crop_id].crop_name}>Tray: {index + 1}</InfoLine>
          </TrayBox>  
          );
        }): []
      }
        </ComingSoonDisplay>
    </ComingSoonContainer>
  );

};

const ComingSoonContainer = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-rows: 15% 80% 5%;
  border-top: .25vmin solid #03A63C;
`;

const ComingSoonDisplay = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 5% repeat(4, 1fr) 5%;
  grid-row: 2;
`;

const ComingSoonHeader = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;

const InfoLine = styled.span`
  font-size: 1.7vmin;
`;

const TrayBox = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
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



export default ComingSoon;