import React from 'react'
import { MainContentCityContent } from './MainContentCityContent'

function MainContentCityCardTemplate() {
    return (
        <div className="row day-row">

            {MainContentCityContent.map((val, key) => {
                return (
                    <div className="col-sm-6 col-lg col-img">
                        <div key={key}className="square">
                            <img src={val.image} className="img-fluid sun" alt=""/>
                                <h5>{val.MaxMin}</h5>
                                <h4> {val.Date}</h4>
                        </div>
                        </div>
                    )
            })}


                </div>
                )
            }

export default MainContentCityCardTemplate
