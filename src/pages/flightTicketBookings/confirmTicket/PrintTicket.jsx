import React, {useState } from 'react'
import './ticket.css'

export default function PrintTicket() {
    const flightBookings=JSON.parse(localStorage.getItem('mbuser')).flightBookings
    const [ticket]=useState(flightBookings[flightBookings.length-1])

    

    return (

        <div className='row container'>
            <h4 className='col-12 trs' style={{fontFamily: `'Inspiration', cursive`}}>myDestination</h4>
            <h5 className='col-12 ths'>{`Flight Ticket - ${ticket.flightDetails.travelAirport.city} to ${ticket.flightDetails.destinationAirport.city} (${ticket.flightDetails.class})`}</h5>
            <strong className='col-12'>
                <div className='row tabTr'>
                    <div className="col-3">Passenger's Name</div>
                    <div className="col-3">Status</div>
                    <div className="col-3">Seat No.</div>
                    <div className="col-3">Ticket No.</div>
                </div>
                {
                    ticket.passengerDetails.adult.map((val,index)=>{
                        return(
                            <div className='row' key={index}>
                                <div className="col-3">{`${index+1}. ${val.fmName} ${val.lName}`}</div>
                                <div className="col-3">Confirmed</div>
                                <div className="col-3">-</div>
                                <div className="col-3">-</div>
                            </div>
                        )
                    })
                }
                {
                    ticket.passengerDetails.child.map((val,index)=>{
                        return(
                            <div className='row' key={index}>
                                <div className="col-3">{`${ticket.passengerDetails.adult.length+index+1}. ${val.fmName} ${val.lName}`}</div>
                                <div className="col-3">Confirmed</div>
                                <div className="col-3">-</div>
                                <div className="col-3">-</div>
                            </div>
                        )
                    })
                }
            </strong>
            <div className='col-12 tabTr mt-5'>{`Going | ${ticket.flightDetails.flightDuration}`}</div>
            <div className='col-12 tabTr p-1'>
                <div className='row'>
                    <div className="col-2">Departure</div>
                    <div className="col-2">Arrival</div>
                    <div className="col-2">From</div>
                    <div className="col-2">To</div>
                    <div className="col-1">Flight No.</div>
                    <div className="col-1">Dep. Terminal</div>
                    <div className="col-1">Arr. Terminal</div>
                    <div className="col-1">Airline</div>
                </div>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <div className="col-2">{ticket.flightDetails.arrivalTime}</div>
                    <div className="col-2">{ticket.flightDetails.departureTime}</div>
                    <div className="col-2">{ticket.flightDetails.travelAirport.city}</div>
                    <div className="col-2">{ticket.flightDetails.destinationAirport.city}</div>
                    <div className="col-1">{ticket.flightDetails._id}</div>
                    <div className="col-1">{ticket.flightDetails.travelAirport.terminal}</div>
                    <div className="col-1">{ticket.flightDetails.destinationAirport.terminal}</div>
                    <div className="col-1">{ticket.flightDetails.companyName}</div>
                </div>
            </div>
            <div className='col-12 mt-3'>{`${Math.floor(ticket.flightDetails.flightDuration/60)}h ${ticket.flightDetails.flightDuration%60}m | ${ticket.flightDetails.travelAirport.name}, 
            ${ticket.flightDetails.travelAirport.sName} - ${ticket.flightDetails.destinationAirport.name}, 
            ${ticket.flightDetails.destinationAirport.sName}`}</div>
            <strong className='col-12 mt-5 tabTr p-2'>
                <div className='row'>
                    <div className='col-4'>E-Ticket Numbers</div>
                    <div className='col-4'>Booking Reference</div>
                    <div className='col-4'>Price Summary</div>
                </div>
            </strong>
            <strong className='col-12 mt-1 tabTr' style={{marginBottom:'5vh'}}>
                <div className='row'>
                    <div className='col-4'>-</div>
                    <div className='col-4'>-</div>
                    <div className='col-4'>{`Rs ${ticket.priceSummary.totalAmmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                </div>
            </strong>
        </div>
    )
}
