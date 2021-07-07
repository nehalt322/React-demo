import React from 'react'
import NavSearchBar from './NavSearchBar'
import NavProfile from './NavProfile'
import '../App.css';

function Navbar() {
    return (
        <div className ="container-fluid container-header">
             <div className="row header-row">
                 <NavSearchBar/>

                 <NavProfile/>


             </div>
            
        </div>
    )
}

export default Navbar
