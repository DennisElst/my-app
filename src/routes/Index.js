import './Index.css';
import Hello from '../components/hello.js';
import Counter from '../components/Counter.js';
import Loader from '../components/Loader.js';
import { Link } from "react-router-dom";
import {setStations as setStationsData, getStations as getStationsData} from "../data/stations";

import {useEffect, useState} from 'react';


function Index() {
  const [stations, setStations] = useState(getStationsData());

  async function getStations() {
    const response = await fetch('http://api.citybik.es/v2/networks/velo-antwerpen');
    const json = await response.json();
    setStations(json.network.stations)
    setStationsData(json.network.stations)

  }



  useEffect(() => {
    if (!stations.length)
    getStations()
  }, []);

let names = [];


let nameElements = [];
names. forEach ( (name) => {
  nameElements. push(<Hello name={name} key={name}/>);
})


return(
  <div className="Index">
      {nameElements}
      <Counter/>
      {stations.length ? stations.map((station)=>(
        <Link to={`/stations/${station.id}`} key={station.id}>{station.name}</Link>
      )) : (
        <div>LOADING...</div>
      )}
    </div>
  );
}




export default Index;
