import React from 'react'
import { useParams } from 'react-router-dom'

function Flights() {
    const path=useParams()
    console.log(path)
    return (
        <div>
            
        </div>
    )
}

export default Flights
