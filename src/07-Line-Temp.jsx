import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

class Template extends React.Component {
  render() {
    const ContStyle = { width: "70%", border: "2px solid black", padding:"7px", margin:"10px auto", display: "flex", backgroundColor: "rgba(224, 249, 24, 0.5)" }
    // const PicStyle = { height:"150px", width: "auto" }
    const InfoSty = { padding: "10px", textAlign: "left" }
    return(
      <div style={ContStyle} >


        <div style={InfoSty}>
          <div><strong>Company: </strong>{this.props.company}</div>
          <div><strong>Position: </strong>{this.props.position}</div>
          <div><strong>Addres: </strong>{this.props.address}</div>
          <div><strong>More Info..: </strong><Link to={`/${this.props.id}`}>LINK</Link></div>
        </div>

      </div>
    )
  }
}

export default Template;
