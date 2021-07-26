import React from "react";

function Article({ title, date, preview, minutes}) {
    // const time = minutes((mins) => {
    //     return <span key={mins}>{mins}</span>
    // })
    return (
      <article>
        <h3>{title}</h3>
        <small>
            {date || "January 1, 1970"}
            </small>
        <p>{preview}</p>
        <div id="minutes">
            {minutes}
        </div>
        
      </article>
    );
  }
  
  export default Article;

//   {props.image !=="" && props.image ? (
//     <img src={props.image} alt="blog logo"></img>
//   ) : <img src="https://via.placeholder.com/215" alt="blog logo"></img>}