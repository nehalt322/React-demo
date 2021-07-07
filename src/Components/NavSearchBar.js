import React from 'react'
import '../App.css';
import { BiSearch } from 'react-icons/bi';

function NavSearchBar() {
    return (
        <div className="col-sm-8  col-search">
        <form>
          <div className="form-group form-search">
            <div className="input-group-prepend border-0">
              <button id="button-Search" type="button" className="btn btn-link text-info btn-search"><BiSearch/></button>
            </div>
            <input type="text" className="form-control search-box" id="formGroupSearchInput" placeholder="Search"/>
          </div>
        </form>

      </div>
    )
}

export default NavSearchBar
