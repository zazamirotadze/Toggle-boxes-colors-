import "./index.css"
import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App(props) {
                   
    const [box1, setBox]=React.useState(boxes)
    
    
    function toggle(id){
        setBox(function(firstArray){
            return firstArray.map(function(element){
                return element.id ===id ? {...element, on: !element.on} : element
            })
        })
    }
    
    
    const boxElements = box1.map(function(value){
        return(<Box 
        greenMode ={true} 
        On={value.on} 
        key={value.id}
        id={value.id} 
        handleClick={toggle}/>)
    })

    return (
        <main>
            <h1>{boxElements}</h1>
        </main>
    )
}