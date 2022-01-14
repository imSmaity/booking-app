import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/components'
import HotelList from './HotelList'
import './hotels.css' 

function Hotels() {
    const [hotelsData,setHotelsData]=useState(null)
    const [loading,setLoading]=useState(false)
    const path=useParams()

    useEffect(()=>{
        axios.post(process.env.REACT_APP_GROUP_HOTEL_SEARCH,path)
        .then(res=>{
            setHotelsData(res.data)
            setLoading(true)
        })
    },[])

    return (
        <div className='row'>
            <div className='col-12 hac'>
                <Header/>
            </div>
            <div className='col-12'>
                <center>
                    <HotelList loading={loading} hotelsData={hotelsData}/>
                </center>
            </div>
        </div> 
    )
}

export default Hotels
