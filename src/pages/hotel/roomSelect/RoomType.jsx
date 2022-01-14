import React from 'react'
import { Link } from 'react-router-dom'

export default function RoomType({hotelData}) {

    return (
        <>
            <div className="col-6 ">
                <div>Room Type</div>
                <div className='mt-3 ml'>{`${hotelData.room} Room`}</div>
                <img className='img-fluid' src={hotelData.image} alt="hotel"/>
                <div className='ml'>{`Accommodates ${hotelData.gPerRoom} Adults`}</div>
            </div>
            <div className="col-6">
                <div>Price</div>
                <div className='mt-5'>₹{hotelData.price}</div>
                <Link to='payment' className='mt-5'>
                    <button  type='button'>Select</button>
                </Link>
            </div>
        </>
    )
}
