import React from 'react'
import '../App.css';

function SidebarCard() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Today</h5>
                    <h6 className="card-subtitle mb-2">11:44</h6>
                    <h6 className="card-subtitle mb-2text-muted">Mon,11 January</h6>
                    <h3 className="card-title"> +4</h3>
                    <h4>New York</h4>
                    <h6 className="card-subtitle mb-2text-muted">United States</h6>
                </div>
            </div>
        </div>

    )
}

export default SidebarCard
