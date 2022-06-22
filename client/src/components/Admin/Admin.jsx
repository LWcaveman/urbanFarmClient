import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Form from "./Form.jsx"
import Inventory from "./Inventory.jsx"

//use an on change with select to hide and unhide the button
//pass props to the button for location based on rows
//use index to figure out where to put the other info needed

function Admin({ cropNames, inventory }) {
  const [inventoryPage, setInventoryPage] = useState(true);

  let trayBoxClick = (e) => {
    let text = e.target.textContent;
    text = text.slice(text.indexOf(':') +2);
    console.log(text)
    if (text ===  'Soon' || text === 'None') {
      setInventoryPage(!inventoryPage);
    }
  };

  return (
    <AdminContainer>
      <Header>What are You Planting Today?</Header>
   {inventoryPage ? <Inventory trayBoxClick={trayBoxClick} inventory={inventory}/> : 
                        <Form cropNames={cropNames}/>} 
    </AdminContainer>
  );

}
 /* grid-template-columns: 1fr; */
const AdminContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1.5fr);
  grid-template-columns: repeat(5, 1fr);
  grid-column: 3;
  grid-row: 2;
`;

const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 5;
`;

export default Admin;
