import React, {useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { InputDate } from '../../../../routes/PageRoutes'
import { airportData } from './airportDatabase'
import './flights.css'


function FROM({travelAirport,displayTravelAirport}){
    return(
        <ul className="dropdown-menu" >
            <li>
            {
                airportData.map((airport,index)=>{
                    return(
                        <div className="dropdown-item" id='cname' key={index} 
                            onClick={()=>{travelAirport(airport.sortName) 
                            displayTravelAirport(airport.name,airport.location)}}>{airport.location}
                            <div id='aname'>{airport.name} 
                                <span id='asname'>{airport.sortName}</span>
                            </div>
                        </div>
                    )
                })
                
            }
                
            </li>
        </ul>
    )
}

function TO({destinationAirport,displayDestinationAirport}){
    return(
        <ul className="dropdown-menu" >
            <li>
            {
                airportData.map((airport,index)=>{
                    return(
                        <div className="dropdown-item" id='cname' key={index} 
                            onClick={()=>{destinationAirport(airport.sortName)
                            displayDestinationAirport(airport.name,airport.location)}}>
                            {airport.location}
                            <div id='aname'>{airport.name} 
                                <span id='asname'>{airport.sortName}</span>
                            </div>
                        </div>
                    )
                })
                
            }
            </li>
        </ul>
    )
}

// const getTodaysDate=()=>{
//     const d=new Date()
//     return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
// }

export default function FlightSearch({travelAirport,destinationAirport,setTicketClass}) {

    const [displayTAirport,setDisplayTAirport]=useState({name:'Dabolim Goa International Airport',location:'Goa, India'})
    const [displayDAirport,setDisplayDAirport]=useState({name:'Indira Gandhi International Airport',location:'Delhi, India'})
    const {date,setDate}=useContext(InputDate)

    function displayTravelAirport(name,location){
        setDisplayTAirport({name:name,location:location})
    }
    function displayDestinationAirport(name,location){
        setDisplayDAirport({name:name,location:location})
    }

    return (
        <>
            <div className="col-md-4 col-12">
                <label  htmlFor="from" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" >FROM</label>
                    <FROM 
                        travelAirport={travelAirport} 
                        displayTravelAirport={displayTravelAirport}
                    />
                <div>
                    <div id="csname">{displayTAirport.location}</div>
                    <div id='adname'>{displayTAirport.name}</div>
                </div>
            </div>

            <div className="col-md-3 col-12">
                <label  htmlFor="to" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" >TO</label>
                    <TO
                        destinationAirport={destinationAirport}
                        displayDestinationAirport={displayDestinationAirport}
                    />
                <div>
                    <div id="csname">{displayDAirport.location}</div>
                    <div id='adname'>{displayDAirport.name}</div>
                </div>
            </div>
        
            <div className="col-md-3 col-12">
                <label  htmlFor="dept">DEPARTURE:</label>
                <div className='mt-2'>
                    <input type='date' id='dateset' className='date' onChange={(e)=>setDate({...date,travelDate:e.target.value})}/>
                </div>
            </div>
            <div className="col-md-2 col-12">
                <label  htmlFor="dept">CLASS:</label>
                <div className='mt-2'>
                    <select name="class" className='date' id="dateset" onChange={(e)=>setTicketClass(e.target.value)}>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
            </div>
        </>
    )
}
