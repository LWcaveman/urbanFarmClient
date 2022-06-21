import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import Home from "./Home/Home2.jsx";
import Admin from "./Admin/Admin.jsx";


function App() {
  const [home, setHome] = useState(true);


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
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>

   </Container>
  );

}

const Container = styled.div`
  display: grid;
  grid-template-columns: 15vmin 1fr 2fr 1fr 15vmin;
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

