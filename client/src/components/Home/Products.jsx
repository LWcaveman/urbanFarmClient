import React from 'react';
import styled from "styled-components";
import InventoryContainer  from '../Admin/Inventory.jsx';

let Products = ({ trayBoxClick, inventory }) => {
  let row = 1
  let column = 0;

  let trayInfo = {
    crop_type: 'Soon',
    date_planted: 'Soon',
    moisture_level: 'None',
  };


  return (
    <ProductsContainer>
  
      HERE I AM 
    </ProductsContainer>
  );

};

const ProductsContainer = styled.div`
  display: grid;


`;

export default Products;