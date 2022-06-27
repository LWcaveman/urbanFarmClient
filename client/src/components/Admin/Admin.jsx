import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import Form from "./Form.jsx";
import Inventory from "./Inventory.jsx";
import Harvest from "./Harvest.jsx";


function Admin({ cropInfo, inventory, newTrayPlanted }) {
  const [inventoryPage, setInventoryPage] = useState(true);
  const [cropSelected, setCropSelected] = useState(false);
  const [cropId, setCropId] = useState(2); 
  const [trayId, setTrayId] = useState(0);
  const [harvested, setHarvested] = useState(false);
  const [harvestedInfo, setHarvestedInfo] = useState([]);

  let trayBoxClick = (e) => {
    console.log('Tray Box Button')
    let text = e.target.textContent;
    let tray_id = e.target.getAttribute("data-tray");
    let cropName =  e.target.getAttribute("data-cropname");
    console.log(e.target.getAttribute("data-cropid"), cropName)
    let info = [];
    info.push(e.target.getAttribute("data-cropid"));
    info.push(e.target.getAttribute("data-cropname"));
    setHarvestedInfo(info);
    text = text.slice(text.indexOf(':') +2);
    if (text ===  'Soon' || cropName === 'Select A Crop') {
      setInventoryPage(false);
      setHarvested(false);
    } else {
      setInventoryPage(false);
      setHarvested(true);
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
      window.location.reload(false);
    });
  };

  let clickHarvest = (e) => {
    let trayInfo = {
      crop_id: 0,
      date: 'Soon',
    };
    let harvObj = {};
    harvObj.cropId = harvestedInfo[0]
    harvObj.cropName = harvestedInfo[1]
    axios.post(`/harvested`, harvObj)
    .then((res) => {
      //update tray inventory 
      axios.put(`/tray/${trayId}`, trayInfo)
      .then((res) => {
        window.location.reload(false);
      });

    });
    //.then get the new info and update App level state
  };

  return (
    <AdminContainer>
      {cropSelected ? null :<Header>What are You Planting Today?</Header>}
      {inventoryPage ? <Inventory trayBoxClick={trayBoxClick} 
                                  inventory={inventory} cropInfo={cropInfo} /> :
       harvested ? <Harvest harvestedInfo={harvestedInfo} clickHarvest={clickHarvest}/> : 
                        <Form cropInfo={cropInfo} cropClicked={cropClicked} 
                            cropSelected={cropSelected} cropId={cropId} 
                            handlePlantClick={handlePlantClick} getDate={getDate}/> 
                          } 
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
