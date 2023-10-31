



import React, { useState } from 'react'
import './css/style.css';
import cloud_icon from '../Assets/cloud.png'
import search_icon from '../Assets/search.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'
import clear_icon from '../Assets/clear.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
// import clear_icon from '../Assets/clear.png';

export default function Tempapp() {
    let api_key="c89a3b119e461da16ec5ad43f52089dd";
    const [wicon,setWicon]= useState(cloud_icon);


    const search = async ()=>{
        const element = document.getElementsByClassName('cityInput');
        if(element[0].value===""){
            return 0;
        }
        // let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid= ${api_key}`;

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;


        let response = await fetch(url);

        let data = await response.json();
        const humidity =document.getElementsByClassName("humidity-percent");humidity[0].innerHTML=data.main.humidity + "%";
        const wind =document.getElementsByClassName("wind-rate");
        wind[0].innerHTML = data.wind.speed + "km/h";

        const temp =document.getElementsByClassName("weather-temp");
        temp[0].innerHTML = data.main.temp + " °c";

        const location = document.getElementsByClassName("weather-location");
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }

    }
  return (
    <div>
      <div className="container">
        <p>ghffghcvbcvbn</p>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='search'/>
            <div className="search-icon" onClick={()=>{
                search();
            }}>
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp"> </div>
        <div className="weather-location"></div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" />
                <div className="data">
                <div className="humidity-percent"></div>
                <div className="text"></div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" />
                <div className="data">
                <div className="wind-rate"></div>
                <div className="text"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

