import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './flights.css'


const getTodaysDate=()=>{
    const d=new Date()
    return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
}

export default function FlightSearch({travelAirport,destinationAirport}) {
    const [departure,setDeparture]=useState(getTodaysDate)
    return (
        <>
            <div className="col-sm-4 col-12">
                <label  htmlFor="from" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" >FROM</label>
                <ul className="dropdown-menu" >
                    <li>
                        <div className="dropdown-item" id='cname' onClick={()=>travelAirport("GOI")}>Goa, India
                            <div id='aname'>Dabolim Goa International Airport 
                                <span id='asname'>GOI</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <div id="csname">Goa, India</div>
                    <div id='adname'>Dabolim Goa International Airport</div>
                </div>
            </div>

            <div className="col-sm-4 col-12">
                <label  htmlFor="to" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" >TO</label>
                <ul className="dropdown-menu" >
                    <li>
                        <div className="dropdown-item" id='cname' onClick={()=>destinationAirport("DEL")}>Delhi, India
                            <div id='aname'>Delhi Airport 
                                <span id='asname'>DEL</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <div id="csname">Delhi, India</div>
                    <div id='adname'>Delhi Airport</div>
                </div>
            </div>
        
            <div className="col-sm-4 col-12">
                <label  htmlFor="dept">DEPARTURE:</label>
                <div className='mt-2'>
                    <input type='date' id='dateset' value={departure} className='date' onChange={(e)=>setDeparture(e.target.value)}/>
                </div>
            </div>
        </>
    )
}
