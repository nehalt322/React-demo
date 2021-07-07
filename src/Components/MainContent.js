import React from 'react'
import '../App.css';
import Navbar from './Navbar';
import MainContentHeading from './MainContentHeading';
import MainContentCityCard from './MainContentCityCard';
import MainContentCityHeading from './MainContentCityHeading';
import MainContentCityCardTemplate from './MainContentCityCardTemplate';

function MainContent() {
    return (
        <div className="Main-Content">
           <Navbar/>
           <MainContentHeading/>
           <MainContentCityCard/>
           <MainContentCityHeading/>
           <MainContentCityCardTemplate/>

        </div>
    )
}

export default MainContent
