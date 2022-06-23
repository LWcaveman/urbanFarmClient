import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import Form from "./Form.jsx";
import Inventory from "./Inventory.jsx";


function Admin({ cropInfo, inventory, newTrayPlanted, getInventory, getCropInfo }) {
  const [inventoryPage, setInventoryPage] = useState(true);
  const [cropSelected, setCropSelected] = useState(false);
  const [cropId, setCropId] = useState(2); 
  const [trayId, setTrayId] = useState(0);

  let trayBoxClick = (e) => {
    let text = e.target.textContent;
    let tray_id = e.target.getAttribute("data-tray")
    text = text.slice(text.indexOf(':') +2);
    if (text ===  'Soon' || text === 'None') {
      setInventoryPage(!inventoryPage);
    }
    setTrayId(tray_id);
    //In later implementation this well got to a harvest from
  };

  let cropClicked = (e) => {
    let crop_id = e.target.value;
    setCropId(crop_id);
    setCropSelected(true); 
  };

  let getDate = () => {
    let yourDate = new Date()
    yourDate.toISOString().split('T')[0]
    return yourDate.toISOString().split('T')[0];
  };

  let handlePlantClick = () => {
    let date = getDate();
    let dateObj = {};
    dateObj.date = date;
    dateObj.crop_id = cropId;
    console.log('UPDATING THIS TRAY ', trayId)
     axios.put(`/tray/${trayId}`, dateObj)
    .then(res => {
      console.log(res);

      axios.get('/admin')
      .catch(err => console.log(err));
      setInventoryPage(true);
    });
  };
 
  return (
    <AdminContainer>
      {cropSelected ? null :<Header>What are You Planting Today?</Header>}
      {inventoryPage ? <Inventory trayBoxClick={trayBoxClick} inventory={inventory} cropInfo={cropInfo}></Inventory> : 
                      <Form cropInfo={cropInfo} cropClicked={cropClicked} 
                            cropSelected={cropSelected} cropId={cropId} 
                            handlePlantClick={handlePlantClick} getDate={getDate}/>} 
    </AdminContainer>
  );

}
 /* grid-template-columns: 1fr; */
const AdminContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
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
