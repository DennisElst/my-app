import './App.css';
import { Link, Outlet } from "react-router-dom";


import {useEffect, useState} from 'react';


function App() {
    return(

      <div className = "App">
        <nav>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </nav>

    <div className="Appoutlet">
      <Outlet/>
    </div>
      </div>

);
}

export default App;
