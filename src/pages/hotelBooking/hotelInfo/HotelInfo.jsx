import React from 'react'
import { useParams } from 'react-router-dom'


function HotelInfo({hotelData}) {

    const date=JSON.parse(useParams().query)
    
    return (
        <div className='row container mr mt-3 '>
            <div className='col-12 ab'>HOTEL INFO</div>
            <div className='col-md-4 col-12'>
                <img src={hotelData.image} className=' img-fluid' alt="hotel" />
            </div>
            <div className='col-md-8 col-12 mt-2 '>
                <div className='bo'>{hotelData.name}</div>
                <div>{hotelData.address}</div>
            </div>
            <div className="col-4 p-2 mt-3">
                <div className='bo'>Check In</div>
                <div>{date.checkInDate}</div>
            </div>
            <div className="col-4 p-2 mt-3">
                <div className='bo'>Check Out</div>
                <div>{date.checkOutDate}</div>
            </div>
            <div className="col-4 p-2 mt-3">
                <div className='bo'>Guests</div>
                <div>{`${hotelData.gPerRoom} Guests | 1 Room`}</div>
            </div>
        </div>
    )
}

export default HotelInfo
