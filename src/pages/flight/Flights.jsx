import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../../components/components'
import FlightList from './FlightList'


function Flights() {
    const [flightsData,setFlightsData]=useState(null)
    const [loading,setLoading]=useState(false)

    const path=useParams()

    useEffect(()=>{
        axios.post(process.env.REACT_APP_GROUP_FLIGHT_SEARCH,{collection:path.searchId})
        .then(
            res=>{
                setFlightsData(res.data)
                setLoading(true)
            }
        )
    },[])
    
  
    return (
        <>
         <div className='row'>
            <div className='col-12 hac'>
                <Header/>
            </div>
            <div className='col-12'>
                <center>
                    <FlightList loading={loading} flightsData={flightsData} path={path}/>
                </center>
            </div>
         </div>   
        </>
    )
}

export default Flights
