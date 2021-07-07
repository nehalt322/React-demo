import React from 'react'
import '../App.css';
import { MainContentCityCardContent } from './MainContentCityCardContent';

function MainContentCityCard() {
    return (
        <div className="row image-row">
            {MainContentCityCardContent.map((val,key)=>{
                return(
                    <div key={key}className="col-sm-12 col-lg-2 col-img">
                        <img className="img-fluid img_class" src={val.icon} alt=""/>
                        <h3 className="city_name">{val.title}</h3>
                    </div>
                )
            })}
            
        </div>
    )
}

export default MainContentCityCard
