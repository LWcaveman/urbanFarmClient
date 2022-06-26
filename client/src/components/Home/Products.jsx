import React from 'react';
import styled from "styled-components";
import InventoryContainer  from '../Admin/Inventory.jsx';

let Products = ({ trayBoxClick, inventory }) => {
  let row = 1
  let column = 0;

  return (
    <ProductsContainer>
      <Header>Get Some MicroGreens</Header>
    </ProductsContainer>
  );

};

const ProductsContainer = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-row: 1;
`;

const Header = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;


export default Products;