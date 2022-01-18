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

function getPriceSummary(adult,child,_class,price){
    const serviceFee=91*(adult.length+child.length)
    const userFee=300*(adult.length+child.length)
    const donation=10*(adult.length+child.length)
    const adultPrice=price*adult.length
    const childPrice=(price*(80/100))*child.length
    const GSTe=(adultPrice+childPrice)*(5/100)
    const GSTb=(adultPrice+childPrice)*(12/100)

    if(_class==="Economy"){
            return {adult:adult.length,child:child.length,adultBaseFare:adultPrice,
            childBaseFare:childPrice,serviceFee:serviceFee,
            userFee:userFee,GST:GSTe,donation:donation,
            totalAmmount:GSTe+adultPrice+childPrice+serviceFee+userFee+donation
        }
    }
    else{
        return {adult:adult.length,child:child.length,adultBaseFare:adultPrice,
            childBaseFare:childPrice,serviceFee:serviceFee,
            userFee:userFee,GST:GSTb,donation:donation,
            totalAmmount:GSTb+adultPrice+childPrice+serviceFee+userFee+donation
        }
    }
}

export const Passenger=createContext("")
function FlightTicketBook() {
    const [flightDetails,setFlightDetails]=useState(null)
    const [loading,setLoading]=useState(false)
    const [info,setInfo]=useState(false)
    
    const [adult,setAdult]=useState([{fmName:'',lName:'',gender0:''}])
    const [child,setChild]=useState([])
    const [infant,setInfant]=useState([])
    const [priceSummary,setPriceSummary]=useState({adult:'',child:'',adultBaseFare:'',childBaseFare:'',serviceFee:'',userFee:'',GST:'',donation:'',totalAmmount:''})

    const [bookingDetails,setBookingDetails]=useState({})

    const path=useParams()

    useEffect(()=>{
        axios.post(process.env.REACT_APP_FLIGHT_SEARCH,{searchId:path.searchId,flightId:path.flightId})
        .then(res=>{
            setFlightDetails(res.data)
            setLoading(true)
        })
    },[])
    useEffect(()=>{
        if(loading){
            setPriceSummary(getPriceSummary(adult,child,flightDetails.class,flightDetails.baseFare))
        }
    },[adult,child,loading])

    useEffect(()=>{
        if(loading){
            setBookingDetails({
                bookingType:'F',
                flightDetails,
                passengerDetails:{adult:adult,child:child,infant:infant},
                priceSummary,
                query:JSON.parse(path.query)
            })
        }
    },[adult,child,infant,priceSummary,loading])


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
                    priceSummary={priceSummary}
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
                    bookingDetails={bookingDetails}
                />
                
            </div>
        </div>
    )
}

export default FlightTicketBook
