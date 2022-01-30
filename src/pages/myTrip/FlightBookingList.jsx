import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintTicket from '../flightTicketBookings/confirmTicket/PrintTicket'

function FlightBookingList() {

    const [flight]=useState(JSON.parse(localStorage.getItem('mbuser')).flightBookings)

    const componentRef=useRef(null)

    const handlePrint=useReactToPrint({
        content: ()=>componentRef.current
    })

    return(
        <center>
            {
                flight.reverse().map((val,index)=>{
                    return(
                        <div className='row container hr' key={index}>
                            <div className='col-3'>
                                <strong><h4>{new Date(val.query.travelDate).toDateString()}</h4></strong>
                            </div>
                            <div className='col-2' style={{textAlign:'right'}}>
                                <div>
                                    {val.flightDetails.travelAirport.sName}
                                    <div>{val.flightDetails.arrivalTime}</div>
                                </div>
                            </div>
                            <div className='col-1'>to</div>
                            <div className='col-2' style={{textAlign:'left'}}>
                                <div>
                                    {val.flightDetails.destinationAirport.sName}
                                    <div>{val.flightDetails.departureTime}</div>
                                </div>
                            </div>
                
                            <div className='col-2'>
                                <div>
                                    {val.flightDetails.companyName}
                                    {/* <div className='mt-2 confi'>CONFIRMED</div> */}
                                    <div className='mt-2'>{val.flightDetails._id}</div>
                                </div>
                            </div>
                            <div className='col-2 mt-3' id='tash'>
                                <div id='book'>{`Booked on: ${val.bookingDate}`}</div>
                            </div>
                            <div className='col-12 sbs'>

                                <button type='button' onClick={handlePrint}>Print Ticket</button>
                                <div  style={{ display: 'none' }}>
                                    <div  ref={componentRef} >
                                        <PrintTicket ticket={val}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </center>
    );
}

export default FlightBookingList;
