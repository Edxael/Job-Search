import React, { Component } from 'react'
// import VisMenu from './00-1-Pro-Menu.jsx'


import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Template from './07-Line-Temp.jsx'
import * as MyLocStorage from './localStorage.js'
import MyMenu from './00-Menu.jsx'

class jobSearch extends Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  render(){
    const { loading, allJobs } = this.props.data
    console.log("All Prod: ", allJobs)
    MyLocStorage.add('lm_allJobs', allJobs )

    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "50%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div>



        <MyMenu/>

          <div style={pageSty}>
            <h2>Search jobs DataBase</h2>
              <p><strong>To find a job type one of the following:</strong>Name, Price, Category, Active Status, Code.</p>

              <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
                onChange={ (event) => { this.setState({ query: event.target.value }) } } />

                {
                  !loading && allJobs
                  .filter((job)=>{ return ( (
                     `${job.company} ${job.position} ${job.address} ${job.companyurl} ${job.date} ${job.mailkeys}
                     ${job.hiringmanager} ${job.sourceoflead} ${job.requirements} ${job.notes} ${job.status} ${job.id}`
                    ).toLowerCase().includes(this.state.query.toLowerCase()) ) })
                  .map((job)=>{ return( <Template key={job.id} id={job.id} company={job.company}
                                            position={job.position} address={job.address} /> ) })
                }


          </div>

      </div>
    )
  }
}


const QUERY = gql`
  query {
    allJobs{
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

export default graphql(QUERY)(jobSearch)




// {
//   !loading && allJobs
//   .filter((job)=>{ return ( (`${job.name} ${job.price} ${job.category} ${job.skbc} ${job.active}`).toLowerCase().includes(this.state.query.toLowerCase()) ) })
//   .map((job)=>{ return( <Template key={job.id} id={job.id} name={job.name}
//         active={job.active} price={job.price} stock={job.stock} /> ) })
// }
