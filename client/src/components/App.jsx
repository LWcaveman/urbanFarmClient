import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Home from "./Home/Home2.jsx";
import Admin from "./Admin/Admin.jsx";


function App() {
  const [home, setHome] = useState(true);
  const [crop_names, setCrop_names] = useState([]);
  const [inventory, setInventory] = useState([]);


  useEffect(() => {
    getCropNames();
    getInventory();
  },[]);

  let getCropNames = () => {
    axios.get('/crops')
    .then((data) => {
      //console.log('Getting Data',data.data);
      let names = data.data;
      names.unshift({crop_name: 'Select A Crop'})
      setCrop_names(names);
    });
  };

  let getInventory = () => {
    axios.get('/inventory')
    .then((res) => {
      //console.log(res);
      setInventory(res.data);
    });
  };


  

  return (
   <Container>
    <BrowserRouter>
      <Nav>
        <Header> Walker's Urban Farm </Header>
        <Button >
          <Link to="/">Home</Link> 
        </Button>
        <Button >
          <Link to="/admin">Admin</Link>
        </Button>
      </Nav>

      <Routes>
        <Route path="/" element={<Home inventory={inventory}/>} />
        <Route path="/admin" element={<Admin cropNames={crop_names} 
                inventory={inventory} />} />
      </Routes>
    </BrowserRouter>

   </Container>
  );

}

const Container = styled.div`
  display: grid;
  grid-template-columns: 20vmin 1fr 4fr 1fr 20vmin;
  grid-template-rows: 7vmin 1fr;

`;

const Header = styled.h2`
  margin: .75vmin;
`;

const Nav = styled.div`
  grid-column: 2 / 5;
  grid-row: 1;
  border-bottom: .25vmin solid green;
`;

const Button = styled.button`
  background: white;
  color: white;
  border-radius: 1vmin;
  padding: .75vmin;

  font-size: 1.5vmin;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;



export default App;

//  margin: 10px;

