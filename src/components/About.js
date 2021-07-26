import React from "react";


function About(props) {
    console.log(props)
    return (
      <div id="about">
          <aside>
          {props.image !=="" && props.image ? (
              <img src={props.image} alt="blog logo"></img>
            ) : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}
          <p>{props.about}</p>
          </aside>
          
          
          
        
        
      </div>
    );
  }
  
  export default About;
