import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="#">{props.tittle}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href='#'>Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutText}</a>  
        </li>
      </ul>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" style={{height:'20px', width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
        <div className="bg-success rounded mx-2" style={{height:'20px', width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
        <div className="bg-danger rounded mx-2" style={{height:'20px', width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
        <div className="bg-warning rounded mx-2" style={{height:'20px', width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
        <div className="bg-light rounded mx-2" style={{height:'20px', width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('light')}}></div>
        <div className="bg-dark rounded mx-2" style={{height:'20px', width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleMode('dark')}}></div>
      </div> */}
      <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
                     tittle: PropTypes.string,
                     aboutText: PropTypes.string
                    }