import React, { Component } from 'react'
import MyMenu from './00-Menu.jsx'
import * as MyLocStorage from './localStorage.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation updatejob(
    $address: String!,
    $company: String!,
    $companyurl: String!,
    $date: DateTime!,
    $hiringmanager: String!,
    $id: ID!,
    $mailkeys: String!,
    $notes: String!,
    $position: String!,
    $requirements: String!,
    $sourceoflead: String!,
    $status: String!
  )
  {
    updatejob( address: $address, company: $company, companyurl: $companyurl, date: $date, hiringmanager: $hiringmanager, id: $id, mailkeys: $mailkeys, notes: $notes, position: $position, requirements: $requirements, sourceoflead: $sourceoflead, status: $status )
    {
      address
      company
      companyurl
      date
      hiringmanager
      id
      mailkeys
      notes
      position
      requirements
      sourceoflead
      status
    }
  }
`

class Updatejob extends Component {
  constructor(props){
    super(props)
    this.state = { show: false, updated: false, id: "", active: "", category: "", name: "", price: "", skbc: "", stock: "" }
  }

  exe1 = ()=>{
    console.log("Profile Updated.")
    this.props.mutate({
      variables: {
              address: this.state.address,
              company: this.state.company,
              companyurl: this.state.companyurl,
              date: this.state.date,
              hiringmanager: this.state.hiringmanager,
              id: this.state.id,
              mailkeys: this.state.mailkeys,
              notes: this.state.notes,
              position: this.state.position,
              requirements: this.state.requirements,
              sourceoflead: this.state.sourceoflead,
              status: this.state.status
            }
    })

    this.setState({ updated: true })
    setTimeout(()=>{ this.setState({ updated: false }) }, 4500)
  }


  componentDidMount(){
    console.clear()
    console.log(MyLocStorage.get('lm_alljobs'))
    let jobsDb = MyLocStorage.get('lm_alljobs')

    console.log("All Jobs In Local Storage")
    console.log(jobsDb)
    const token = this.props.match.params.id
    let currentjob = jobsDb.filter((x)=>{ return x.id === token }).reduce((z)=>{return z})

    this.setState({
      address: currentjob.address,
      company: currentjob.company,
      companyurl: currentjob.companyurl,
      date: currentjob.date,
      hiringmanager: currentjob.hiringmanager,
      id: currentjob.id,
      mailkeys: currentjob.mailkeys,
      notes: currentjob.notes,
      position: currentjob.position,
      requirements: currentjob.requirements,
      sourceoflead: currentjob.sourceoflead,
      status: currentjob.status
    })

    this.setState({ show: true })
  }


  render(){
    const Infocont = { padding: "0px 15px", width: "100%", textAlign: "left" }
    const updated = { textAlign: "center", padding: "15px", backgroundColor: "rgb(149, 255, 112)" }
    const UInfo = { marginTop: "10px" }
    const title2 = { textAlign: "center" }
    const labelSty = { marginLeft: "10px" }
    const inputSty = { width: "100%", padding: "5px" }
    // const ppic = { border: "2px solid black", width: "231px", height: "325px" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px", backgroundColor: "rgb(249, 190, 162)" }
    return(
      <div>

        <MyMenu/>

        <div>
          <h2>job Profile</h2>


          { this.state.show ?

            <div>

              <div style={Infocont}>

                <form>
                    <div style={UInfo}> <label style={labelSty}>Company Name:  </label> <input style={inputSty} type="text" value={this.state.company} onChange={ (event) => { this.setState({ company: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Adress:  </label> <input style={inputSty} type="text" value={this.state.address} onChange={ (event) => { this.setState({ address: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Position:  </label> <input style={inputSty} type="text" value={this.state.position} onChange={ (event) => { this.setState({ position: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Requirements:  </label> <input style={inputSty} type="text" value={this.state.requirements} onChange={ (event) => { this.setState({ requirements: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Date:  </label> <input style={inputSty} type="text" value={this.state.date} onChange={ (event) => { this.setState({ date: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Company URL:  </label> <input style={inputSty} type="text" value={this.state.companyurl} onChange={ (event) => { this.setState({ companyurl: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Hiring Manager:  </label> <input style={inputSty} type="text" value={this.state.hiringmanager} onChange={ (event) => { this.setState({ hiringmanager: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>sourceoflead:  </label> <input style={inputSty} type="text" value={this.state.sourceoflead} onChange={ (event) => { this.setState({ sourceoflead: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Mail Keys:  </label> <input style={inputSty} type="text" value={this.state.mailkeys} onChange={ (event) => { this.setState({ mailkeys: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Status:  </label> <input style={inputSty} type="text" value={this.state.status} onChange={ (event) => { this.setState({ status: event.target.value }) } } /></div>
                    <div style={UInfo}> <label style={labelSty}>Notes:  </label> <input style={inputSty} type="text" value={this.state.notes} onChange={ (event) => { this.setState({ notes: event.target.value }) } } /></div>
                </form>

                <br/>
                <div>
                  <div><strong>Job ID: </strong>{this.state.id}</div>
                </div>

                <br/>

                { this.state.updated ? <div style={updated}>Changes has been made, please Log Out and Log In to see changes</div> : <div style={title2}>Click Button to execute changes.</div> }
                <br/>

              </div>
            </div>


            : <div>Loading job Data....</div>
          }

          <button style={btnSty} onClick={()=>{this.exe1()}} >Update job</button>


        </div>

      </div>
    )
  }
}


export default graphql(MUTATION)(Updatejob)
