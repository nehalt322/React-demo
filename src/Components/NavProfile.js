import React from 'react'
import '../App.css'
import { BsFillBellFill } from 'react-icons/bs';
import profile from '../profile.jpg'


function NavProfile() {
    return (
        <div className="col-sm-3 col-profile">
        <div className="profile">
          <div className="bell-icon">
            <div className="bell-container">
              <button id="button-bell" type="button" className="btn bell-button"><BsFillBellFill /></button>
            </div>
          </div>
          <img src={profile} className="img rounded-circle" alt=""/>
          <div className="user-name">Willam Jacobs</div>
        </div>
      </div>
    )
}

export default NavProfile
