import React from 'react'
import './travelInfo.css';
import stren from "../../assets/Rectangle 77.svg";
import {Link} from "react-router-dom";

function TravelInfo({title, period, country,desc, photo}) {

    return (
        <div className='travel-info'>
            <div className="place-photo">
            {photo}
            </div>
            <div className="contents">
                <p> <img src="" alt="" />{country} <span> <a href="#">View Google Map</a>  </span> </p>
                <h2>{title}</h2>
                <p>{period}</p>
                <p>{desc} </p>
            </div>
        </div>
    );
}

export default TravelInfo;