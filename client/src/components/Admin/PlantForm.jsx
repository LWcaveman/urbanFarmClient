import React, { useState, useEffect } from 'react';
import styled from "styled-components";


let PlantForm = ({cropInfo}) => {
//make 10 input forms

let getDate = () => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time;
  return dateTime;
};

  return (
    <>
      <PlantName> {cropInfo.crop_name} </PlantName>
      <PlantInfo>Sow Weight: {cropInfo.sow_weight}</PlantInfo>
      <PlantInfo>Soil: Brurpee Potting Mix</PlantInfo>
      <PlantInfo>Blackout with Weight: {
        cropInfo.blackout_weight.slice(0,cropInfo.blackout_weight.indexOf(','))}</PlantInfo>
      <PlantInfo>Blackout without Weight: {
        cropInfo.blackout_weight.slice(cropInfo.blackout_weight.indexOf(',')+1)}
      </PlantInfo>
      <PlantInfo>Grow Time: {cropInfo.grow_time}</PlantInfo>
      <PlantInfo>Average Harvest Weight: {cropInfo.harvest_weight}</PlantInfo>
      <PlantInfo>Date Planted: {getDate()} </PlantInfo>
    </>
  );
};


const PlantInfo = styled.div`
  grid-column: 1 / 4;
  display: grid;
  justify-content: center;
  font-size: 2.5vmin;
`;

const PlantName = styled.h2`
  display: grid;
  justify-content: center;
  grid-column: 1 / 4;
`

export default PlantForm;

