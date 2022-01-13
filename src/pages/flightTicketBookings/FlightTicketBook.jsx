import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/components'
import FareSummary from './FareSummary'
import Ticket from './Ticket'
import './flightTicketBook.css'
import axios from 'axios'
import ImportantInformation from './ImportantInformation'
import TravellerDetails from './TravellerDetails'
import PaymentDetails from './PaymentDetails'


export const Passenger=createContext("")
function FlightTicketBook() {
    const [flightDetails,setFlightDetails]=useState(null)
    const [loading,setLoading]=useState(false)
    const [info,setInfo]=useState(false)
    
    const [adult,setAdult]=useState([{fmName:'',lName:'',gender0:''}])
    const [child,setChild]=useState([])
    const [infant,setInfant]=useState([])


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
            <div className=' mt-5 col-12'>
                {
                    info?
                    <div className='tdFrame mt-1'>
                        <div>TRAVELLER DETAILS
                        <span className='addBtn' style={{marginLeft:'10vh'}}>
                            <button type='button' onClick={()=>setInfo(false)}>edit</button>
                        </span></div>
                    </div>:
                    <Passenger.Provider value={{adult,setAdult,child,setChild,infant,setInfant}}>
                        <TravellerDetails
                            loading={loading}
                            setInfo={setInfo} 
                        />
                    </Passenger.Provider>
                }
            </div>
            <div className=' mt-5 col-12' style={{marginBottom:'5vh'}}>
               
                <PaymentDetails
                    loading={loading} 
                    info={info}
                />
                
            </div>
        </div>
    )
}

export default FlightTicketBook
