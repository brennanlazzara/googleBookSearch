import React from 'react'
import {Link} from 'react-router-dom' 
import './style.css'

function index() {
    return (
        <div>
             <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <label id="header"><b>Google Search</b></label>

      <div id="links">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <div >
              <Link to='/' className="nav-link" id="about"> Search Books </Link>
              </div>
            </li>

            <li className="nav-item">
            <div >
              <Link to='/Saved' className="nav-link" id="about"> Saved Books </Link>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
        </div>
        
    )
}

export default index
