import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Home from "./Home/Home2.jsx";
import Admin from "./Admin/Admin.jsx";


function App() {
  const [crop_Info, setCrop_Info] = useState([{crop_name: 'Soon'}]);
  const [inventory, setInventory] = useState([]);
  const [trayPlanted, setTrayPlanted] = useState(0);

  useEffect(() => {
    getCropInfo();
    getInventory();
  },[]);

  let getCropInfo = () => {
    axios.get('/crops')
    .then((data) => {
      let Info = data.data;
      Info.unshift({crop_name: 'Select A Crop', id: 0})
      setCrop_Info(Info);
    });
  };

  let getInventory = () => {
    axios.get('/inventory')
    .then((res) => {
      setInventory(res.data);
    });
  };

  let newTrayPlanted = () => {
    setTrayPlanted(trayPlanted + 1);
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
        <Route path="/admin" element={<Admin cropInfo={crop_Info} 
                inventory={inventory} newTrayPlanted={newTrayPlanted} 
                getInventory={getInventory} getCropInfo={getCropInfo}/> }/>
      </Routes>
    </BrowserRouter>
   </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 25vmin 1fr 4fr 1fr 25vmin;
  grid-template-rows: 7vmin 1fr;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.h2`
  margin: .75vmin;
`;

const Nav = styled.div`
  grid-column: 2 / 5;
  grid-row: 1;
  border-bottom: .25vmin solid #03A63C;
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

