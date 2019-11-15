import React from 'react'

function TextFromAnother() {

const textloop = () => {
    
    console.log("text from another")
   
    
}

    return (
        <div>
            <h2>frmo text</h2>
            <button onClick={textloop}>from another</button>
       
        </div>
    )
}

export default TextFromAnother