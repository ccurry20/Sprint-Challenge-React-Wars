import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

const Button = styled.button`
  background-color: "white";
  padding: 10px 25px ; 
  font-size: 16px;
  border-radius: 20%;
`;

export default function AppCard( props) {
  return (
    <div className = "list">
  
     <h3> {props.character.name} </h3>
     <Button> {props.character.birth_year} </Button>  

    </div>
  );
}
