import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../../components/components'
import Amenities from './Amenities'
import HotelPolicies from './HotelPolicies'
import RoomType from './RoomType'
import './room.css'

function RoomSelect() {
    const [hotelData,setHotelData]=useState(null)
    const [loading,setLoading]=useState(false)
    const path=useParams()

    useEffect(()=>{
        axios.post(process.env.REACT_APP_HOTEL_SEARCH,path)
        .then(res=>{
            setHotelData(res.data)
            setLoading(true)
        })
    },[path])


    return (
        <div className='row mb-4'>
        {
            loading?
            <>
                <div className='col-12 hac'>
                    <Header/>
                </div>
                <div className='col-12'>
                    <center>
                        <div className='row container-fluid'>
                            <div className='col-12 mt-4' style={{textAlign:'left'}}>
                                <h4 className="col-12 "><strong>{hotelData.name}</strong></h4>
                                <div className="col-12">{hotelData.address}</div>
                            </div>
                            <div className='col-12'>
                                <RoomType hotelData={hotelData}/>
                            </div>
                            <div className="col-12"><Amenities/></div>
                            <div className="col-12 select"><HotelPolicies/></div>
                        </div>
                    </center>
                </div>
            </>:
            <div>Loading...</div>
        }
            
        </div>
    )
}

export default RoomSelect
