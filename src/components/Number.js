import React from 'react'

function addNumber(a, b) {
    return a + b
}

function Number({ numb1, numb2 }) {
    var result = addNumber(numb1, numb2)
    
    return (
        <div>
            <h3>{result}</h3>
        </div>
    )
}

export default Number
