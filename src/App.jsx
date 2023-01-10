import { useState, useEffect } from 'react';
import axios from 'axios';
import header from "./assets/images/Header.png"
import RickAndMorth from './components/RickAndMorth';
import "./App.css"


function App() {

  return (
    <div className="App">
        <header>
          <img src={header} alt="" />
        </header>
          <RickAndMorth/>
    </div>
  )
}

export default App
