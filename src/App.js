import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
//import ".index.js"; 
//import styled from "styled-components";
import AppCard from "./AppCard";

export default function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWars, setStarWars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() =>  {
    setIsLoading(true);
    setStarWars([]);
    axios
    .get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res); 
      setStarWars(res.data.results);  
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      {starWars.map(ppl => {
        return <AppCard character = {ppl} />;
      })}
     
    </div>
  );
}

//export default App;
