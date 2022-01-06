import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/components'
import FareSummary from './FareSummary'
import Ticket from './Ticket'
import './flightTicketBook.css'
import axios from 'axios'
import ImportantInformation from './ImportantInformation'
import TravellerDetails from './TravellerDetails'

function FlightTicketBook() {
    const [flightDetails,setFlightDetails]=useState(null)
    const [loading,setLoading]=useState(false)
    const path=useParams()

    useEffect(()=>{
        axios.post(process.env.REACT_APP_FLIGHT_SEARCH,{searchId:path.searchId,flightId:path.flightId})
        .then(res=>{
            setFlightDetails(res.data)
            setLoading(true)
        })
    },[])
    return (
        <div className='row'>
            <div className='col-12 hac'><Header/></div>
            <div className="col-md-8 col-12">
                <Ticket 
                    flightDetails={flightDetails} 
                    loading={loading} 
                />
            </div>
            <div className="col-md-4 col-12">
                <FareSummary 
                    flightDetails={flightDetails} 
                    loading={loading} 
                />
            </div>
            <div className=' mt-3 col-12'>
                <ImportantInformation
                    loading={loading} 
                />
            </div>
            <div className=' mt-3 col-12'>
                <TravellerDetails
                    loading={loading} 
                />
            </div>
        </div>
    )
}

export default FlightTicketBook
