import React from "react";


function Header(props) {
    console.log(props)
    return (
      <header>
        <h1>{props.name}</h1>
        
      </header>
    );
  }
  
export default Header;