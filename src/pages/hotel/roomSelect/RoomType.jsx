import React from 'react'
import { Link } from 'react-router-dom'

export default function RoomType({hotelData}) {

    return (
        <div className='row select'>
            <div className="col-6 ">
                <div style={{fontWeight:'bold'}}>Room Type</div>
                <div className='mt-3 p-2 ml rts'>{`${hotelData.room} Room`}</div>
                <img className='img-fluid' id='hphoto' src={hotelData.image} alt="hotel"/>
                <div className='ml p-2'>{`Accommodates ${hotelData.gPerRoom} Adults`}</div>
            </div>
            <div className="col-6">
                <div style={{fontWeight:'bold'}}>Price</div>
                <div className='mt-5 p-1'>₹{hotelData.price}</div>
                <Link to='payment' className='mt-5'>
                    <button  type='button' className='btn btn-warning btn-sm'>Select</button>
                </Link>
            </div>
        </div>
    )
}
