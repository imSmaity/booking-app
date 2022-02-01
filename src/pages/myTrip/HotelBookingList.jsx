import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import ConfirmPage from '../hotelBooking/confirmHotelBook/ConfirmPage';


function HotelBookingList() {
    const [hotel]=useState(JSON.parse(localStorage.getItem('mbuser')).hotelBookings)
    const componentRef=useRef(null)

    const handlePrint=useReactToPrint({
        content: ()=>componentRef.current
    })
    return(
        <center>
            {
                hotel.length!==0?
                hotel.reverse().map((val,index)=>{
                    return(
                        <div className='row container hr' key={index}>
                            <div className='col-4' id='tash'>
                                <div id='shh'>{val.hotelData.name}</div>
                                <div>{val.hotelData.address}</div>
                            </div>
                            <div className='col-3' id='tash' >
                                <div id='shh'>Check In</div>
                                <div>{new Date(val.query.checkInDate).toDateString()}</div>
                            </div>
                            <div className='col-3' id='tash'>
                                <div id='shh'>Check Out</div>
                                <div>{new Date(val.query.checkOutDate).toDateString()}</div>
                            </div>
                            <div className='col-2 mt-3' id='tash'>
                                <div id='book'>{`Booked on: ${val.bookingDate}`}</div>
                            </div>
                            <div className='col-12 sbs'>

                                <button type='button' onClick={handlePrint}>Print Hotel Voucher</button>
                                <div  style={{ display: 'none' }}>
                                    <div  ref={componentRef} >
                                        <ConfirmPage ticket={val}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }):
                <div>No hotels booked yet</div>
            }
        </center>
     );
}

export default HotelBookingList;
