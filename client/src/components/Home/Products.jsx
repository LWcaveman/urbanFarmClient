import axios from 'axios';
import React from 'react';
import styled from "styled-components";

let Products = ({ harvestInventory}) => {
  let column = 1;

  let harvestedCropClicked = (e) => {
    console.log("ID of product",e.target.getAttribute("data-cropid"))
    let id = e.target.getAttribute("data-cropid");
   axios.delete(`/harvested/${id}`)
   .then(res => {
      window.location.reload();
    });
  };

  return (
    <ProductsContainer>
      <Header>Get Some MicroGreens</Header>
      <ProductDisplay>
      {harvestInventory.map((crop, index) => {

        column = column +1
        return (
          <TrayBox  onClick={harvestedCropClicked} data-tray={index + 1} data-cropid={crop.crop_id} data-cropname={harvestInventory.crop_name} column={column} key={index}>
            <InfoLine onClick={harvestedCropClicked} data-tray={index + 1}  data-cropid={crop.crop_id} data-cropname={harvestInventory.crop_name}> {harvestInventory? crop.crop_name : 'Soon'}</InfoLine>
          </TrayBox>  
          );
        })
      }
      </ProductDisplay>
    </ProductsContainer>
  );

};

const ProductsContainer = styled.div`
  display: grid;
  grid-template-rows: 25% 50% 25%;
  grid-row: 1;
`;

const ProductDisplay = styled.div`
  display: grid;
  grid-template-columns: 5% repeat(4, 1fr) 5%;
  grid-row: 2;
`;

const Header = styled.h2`
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


export default Products;