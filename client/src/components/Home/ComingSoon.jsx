import React from 'react';
import styled from "styled-components";
import InventoryContainer  from '../Admin/Inventory.jsx';

let ComingSoon = ({}) => {


  return (
    <ComingSoonContainer>
        <ComingSoonHeader> Here's What's Growing </ComingSoonHeader>
    </ComingSoonContainer>
  );

};

const ComingSoonContainer = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-rows: 50% 50%;
  border-top: .25vmin solid #03A63C;
`;

const ComingSoonHeader = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;


export default ComingSoon;