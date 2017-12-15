import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export default class extends Component {
  state = { redirect: false, password: "" }

  exe1 = ()=>{
    console.log("inside of Exe1");
    if(this.state.password === "Kodoma"){
      this.setState({ redirect: true })
    }
  }

  render() {
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    const pSty = { textAlign: "left" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const logCont = { width: "50%", margin: "0px auto", display:"block" }
    const btn1 = { margin: "0px auto", display:"block" }
    return(
      <div style={pageSty}>
        <h1> Admin Log-In</h1>

          <div style={logCont}>

              <div>
                  <label style={labelSty} for="uname">Username:</label>
                  <input style={inputSty} type="text" id="uname" name="uname" placeholder="  Username..." />
              </div>
              <div>
                  <label style={labelSty} for="pword">Password:</label>
                  <input style={inputSty} type="password" placeholder="  Password..." value={this.state.password} onChange={ (event) => { this.setState({ password: event.target.value }) } } />
              </div>
              <br/>

              { this.state.redirect ? <Redirect push to="/jsea" /> : <button onClick={this.exe1} style={btn1}>Log-In</button> }

          </div>

      </div>
    )
  }
}
