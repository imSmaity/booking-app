import React, { useContext, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import { InputDate } from '../../../routes/PageRoutes'
import FlightSearch from './flights/FlightSearch'
import HotelSearch from './hotels/HotelSearch'

import './searchf.css'

export default function SearchFrame() {
    const [searchType,setSearchType]=useState("flights")
    const [searchingItems,setSearchingItems]=useState({travelingAirport:'GOI',destinationAirport:'DEL',hotelsBookingCity:'Goa'})
    const [ticketClass,setTicketClass]=useState("Economy")
    const {date}=useContext(InputDate)

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

    function hotelsBookingCity(city){
        setSearchingItems({...searchingItems,hotelsBookingCity:city})
    }

    function searchITEMS(){
        if(searchType==='flights'){
            if(searchingItems.travelingAirport===searchingItems.destinationAirport){
                alert("Source and destination cannot be same")
            }
        }
        else{
            if(date.checkInDate!=='' && date.checkOutDate!==''){   
                if(date.checkInDate===date.checkOutDate){
                    alert('Check-in and check-out date cannot be same.')
                }
            }
            else{
                alert('Please provide check-in and check-out date.')
            }
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
                    <FlightSearch 
                        travelAirport={travelAirport} 
                        destinationAirport={destinationAirport} 
                        setTicketClass={setTicketClass}
                    />:
                    <HotelSearch 
                        hotelsBookingCity={hotelsBookingCity}
                    />
                }
                </div>
            </div>
            <div className="col-5"></div>
            <div className='col-2 searb'>
            {
                searchType==="flights"?
                <Link to={
                    searchingItems.travelingAirport===searchingItems.destinationAirport?
                    '/':
                    `${searchType}/${ticketClass}/${searchingItems.travelingAirport}${searchingItems.destinationAirport}`
                    
                 }>
                    <button type='button' id='search' onClick={searchITEMS}>SEARCH</button>
                </Link>:
                <Link to={
                    date.checkInDate!=='' && date.checkOutDate!==''?
                        date.checkInDate===date.checkOutDate?
                        '/':
                        `${searchType}/${searchingItems.hotelsBookingCity}`:
                    '/'
                }>
                    <button type='button' id='search' onClick={searchITEMS}>SEARCH</button>
                </Link>

            }
                
            </div>
            <div className="col-5"></div>
        </div>
    )
}
