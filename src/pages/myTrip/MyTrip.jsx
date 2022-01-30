import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Header} from '../../components/components'
import { UserState } from '../../routes/PageRoutes';
import FlightBookingList from './FlightBookingList';
import HotelBookingList from './HotelBookingList';
import './my_trip.css'

function MyTrip() {
    const [flightTicketShow,setFlightTicketShow]=useState(true)
    const [hotelTicketShow,setHotelTicketShow]=useState(false)
    const {state}=useContext(UserState)
    const navite=useNavigate()

    if(!state){
        navite('/login')
    }
    function flightShow(){
        setFlightTicketShow(true)
        setHotelTicketShow(false)
    }
    function hotelShow(){
        setHotelTicketShow(true)
        setFlightTicketShow(false)
    }
  return( 
    <div className='row'>
        <div className='col-12 hac'>
            <Header/>
        </div>
        <div className='col-12'>
            <div className='row myt'>
            
                <button className="col-6" id={flightTicketShow? 'sbf':''} onClick={flightShow}>FLIGHT BOOKINGS</button>
                <button className="col-6" id={hotelTicketShow? 'sbf':''} onClick={hotelShow}>HOTEL BOOKINGS</button>
            
            </div>
        </div>
        <div className='col-12'>
            <div className='row container'>
                <div className='col-12'><strong>My Trip</strong></div>
                <div className='col-12'>
                {
                    state?
                    flightTicketShow?
                    <FlightBookingList/>:
                    <HotelBookingList/>:
                    <div></div>
                }
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyTrip;
