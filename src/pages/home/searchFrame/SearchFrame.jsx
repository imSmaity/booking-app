import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import FlightSearch from './flights/FlightSearch'
import HotelSearch from './hotels/HotelSearch'

import './searchf.css'

export default function SearchFrame() {
    const [searchType,setSearchType]=useState("flights")
    const [searchingItems,setSearchingItems]=useState({travelingAirport:'GOI',destinationAirport:'DEL',hotelsBookingCity:'Goa'})
    const [ticketClass,setTicketClass]=useState("e")
    const flight=useRef("")
    const hotel=useRef("")


    function inputSearchType(){
        setSearchType(searchType===flight.current.value?hotel.current.value:flight.current.value)
    }
    function travelAirport(airportName){
        setSearchingItems({...searchingItems,'travelingAirport':airportName})
    }
    function destinationAirport(airportName){
        setSearchingItems({...searchingItems,'destinationAirport':airportName})
    }
    function searchITEMS(){
        if(searchingItems.travelingAirport!==searchingItems.destinationAirport){
            console.log(searchingItems)
        }
        else{
            alert("Source and destination cannot be same")
        }
        
    }
    return (
        <div className='row sfc container'>
            <div className='col-12'>
                <div className='btnc'>
                    <input type='radio' id='flights' name='stype' value={"flights"} ref={flight} onClick={inputSearchType} defaultChecked={true}/>
                    <label htmlFor="flights">Flights</label>
                    <input type='radio' id='hotels' name='stype' value={"hotels"}  ref={hotel} onClick={inputSearchType} />
                    <label htmlFor="hotels">Hotels</label>
                </div>
            </div>
            <div className='col-12'>
                <div className='row sframe'>
                {
                    searchType==="flights"?
                    <FlightSearch travelAirport={travelAirport} destinationAirport={destinationAirport} setTicketClass={setTicketClass}/>:
                    <HotelSearch/>
                }
                </div>
            </div>
            <div className="col-5"></div>
            <div className='col-2 searb'>
                <Link to={
                    searchingItems.travelingAirport!==searchingItems.destinationAirport?
                    `${searchType}/${ticketClass}/${searchingItems.travelingAirport}${searchingItems.destinationAirport}`:
                    '/'
                    }>
                    <button type='button' id='search' onClick={searchITEMS}>SEARCH</button>
                </Link>
            </div>
            <div className="col-5"></div>
        </div>
    )
}
