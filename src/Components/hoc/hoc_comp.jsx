import React from "react";

const Hoc_comp = (Component ) => {

  return (props) => {
    if(props.loggedIn){
        return(
            <Component {...props} style={{ color: "blue", border: "2px solid black" }} />)}
 else{
   return <h1>pls login</h1>
 }
    }
 
  ;
};

export default Hoc_comp;
