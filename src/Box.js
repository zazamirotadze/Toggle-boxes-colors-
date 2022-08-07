import React from "react"


 

export default function Box(props){
    const styleForBox = {
    background: props.On ? "yellow": "cyan"
    } 
    return(<div  
    style={styleForBox}  
    className="boxes-div" 
    onClick={function(){props.handleClick(props.id)}} > </div>)
}           