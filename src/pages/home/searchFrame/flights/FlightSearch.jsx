import React, {useContext, useState } from 'react'
import { InputDate } from '../../../../routes/PageRoutes'

import './flights.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import FROM from './FROM'
import TO from './TO'




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
            <div className="col-lg-4 col-12">
                <label  htmlFor="from" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" id='tfs'>FROM</label>
                    <FROM 
                        travelAirport={travelAirport} 
                        displayTravelAirport={displayTravelAirport}
                    />
                <div>
                    <div id="csname">{displayTAirport.location}</div>
                    <div id='adname'>{displayTAirport.name}</div>
                </div>
            </div>

            <div className="col-lg-3 col-12">
                <label  htmlFor="to" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" id='tfs'>TO</label>
                    <TO
                        destinationAirport={destinationAirport}
                        displayDestinationAirport={displayDestinationAirport}
                    />
                <div>
                    <div id="csname">{displayDAirport.location}</div>
                    <div id='adname'>{displayDAirport.name}</div>
                </div>
            </div>
        
            <div className="col-lg-3 col-12">
                <label  htmlFor="dept" id='tfs'>DEPARTURE:</label>
                <div className='mt-2'>
                    <DatePicker selected={date.travelDate} id='dateset'  minDate={moment().toDate()} onChange={(e)=>setDate({...date,travelDate:e})}/>
                </div>
            </div>
            <div className="col-lg-2 col-12">
                <label  htmlFor="dept" id='tfs'>CLASS:</label>
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
