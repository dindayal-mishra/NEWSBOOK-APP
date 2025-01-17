import React, { Component } from 'react'
import {Link} from "react-router-dom"; 

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg  bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NEWS-BOOK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link Link className="nav-Link active" aria-current="page" to="/">Home</Link>
        </li> */}
        <li className="nav-item"><Link className="nav-link" to="/"><strong>General</strong></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/business"><strong>Business</strong></Link></li>
         <li className="nav-item"><Link className="nav-link" to="/entertainment"><strong>Entertainment</strong></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health"><strong>Health</strong></Link></li>
       <li className="nav-item"><Link className="nav-link" to="/sports"><strong>Sports</strong></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology"><strong>Technology</strong></Link></li>
        {/* <li className="nav-item dropdown">
          <a Link className="nav-Link dropdown-toggle" to="/" role="button" dat<strong></strong>a-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="/">Action</a></li>
            <li><a className="dropdown-item" to="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a Link className="nav-Link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
 </div>
  </div>
</nav>
      </div>
    )
  }
}
