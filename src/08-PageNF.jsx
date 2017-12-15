import React from "react";
import missPic from './img/404.jpg';

class Page extends React.Component{
  render() {
    return(
      <div>
        <h3>Upsss... the page requested do not exist..</h3>
        <img src={missPic} alt="Miss Pic."/>
      </div>
    )
  }
}

export default Page;
