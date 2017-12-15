import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class VisMenu extends Component {
  render() {
    const menuCont = { display: "flex", justifyContent: "center", padding: "7px" }
    const btn1 = { padding: "5px 8px", margin: "1px", backgroundColor: "rgb(192, 199, 246)", border: "1px solid black" }
    return(
      <div>
        <div style={menuCont}>
          <Link style={btn1} to="/">LogOut</Link>
          <Link style={btn1} to="/jsea">Search</Link>
          <Link style={btn1} to="/jadd">Add</Link>
          <Link style={btn1} to="/jdel">Delete</Link>
        </div>
        <hr/>
        <br/>
      </div>
    )
  }
}
