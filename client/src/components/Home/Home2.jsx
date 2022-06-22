import React from 'react';
import styled from "styled-components";
import Products from './Products.jsx';

function Home({ inventory }) {
   return(
    <Homecontain>
      <Header>Get Some MicroGreens</Header>
         <Products  inventory={inventory}/> 
      <Button2> Buy </Button2>
    </Homecontain>
   )
} 

const Homecontain = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 2 /5;
  grid-row: 2;
`;

const Header = styled.h2`
  margin: .75vmin;
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

const Button2 = styled.button`
  background: green;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;

export default Home;