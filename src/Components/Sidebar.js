import React from 'react'
import '../App.css';
import SidebarHeader from './SidebarHeader';
import {SidebarContents} from './SidebarContents';
import SidebarCard from './SidebarCard';

function Sidebar() {
    return (
        <div className="Sidebar">
            <SidebarHeader/>
            <ul>
                {SidebarContents.map((val,key)=>{
                    return(
                        <li key={key} className="Sidebar-list"><div className="Sidebar-icon">{val.icon}</div><div className="Sidebar-title">{val.title}</div></li>
                    )
                })}

            
            </ul>
            <SidebarCard/>
        </div>
       
    )
}

export default Sidebar
