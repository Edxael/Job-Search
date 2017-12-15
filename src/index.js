import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { client } from './06-Endpoint.jsx'
import Banner from './img/tiger.jpg';

import LogPage from './01-Log-In.jsx'
import Search from './02-Search.jsx'
import Add from './05-Add.jsx'
import Delete from './04-Delete.jsx'
import Unipage from './03-Unipage.jsx'
import PageNF from './08-PageNF.jsx'

class IndexComp extends Component {
  render() {
    const idxComp = { textAlign: "center", backgroundColor: "gray", margin: "0px 10%" }
    const contentBG = { backgroundColor: "rgba(254, 254, 254, 0.5)", margin: "0px 10%", padding: "15px", border: "3px solid red" }
    const picSty = { margin: "0px auto", display: "block", width: "100%", height: "auto" }
    return(
      <div style={idxComp}>
        <br/>
        <ApolloProvider client={client} >
          <Router>
            <div style={contentBG}>

              <img style={picSty} src={Banner} alt="Miss Pic."/>

              <hr/>
              <br/>

              <Switch>

                <Route exact path="/" component={LogPage}/>
                <Route path="/jsea" component={Search}/>
                <Route path="/jadd" component={Add}/>
                <Route path="/jdel" component={Delete}/>
                <Route path="/:id" component={Unipage}/>
                <Route component={PageNF}/>

              </Switch>

              <br/>
              <hr/>
              <p>By: Edmundo Rubio</p>
            </div>
          </Router>
        </ApolloProvider>
        <br/>
      </div>
    )
  }
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))
