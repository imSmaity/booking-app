import axios from 'axios'
import React, { useState } from 'react'
import { Input } from '../../components/components'

const planeInputAttribute=[
    {
        type:'text',
        displayName:'Company Name',
        name:'comName'
    },
    {
        type:'text',
        displayName:'trackingCode',
        name:'trackCode',
    },
    {
        type:'text',
        displayName:'Travel Airport name',
        name:'taName'
    },
    {
        type:'text',
        displayName:'Travel Airport sort name',
        name:'tasName'
    },
    {
        type:'text',
        displayName:'Travel Airport city',
        name:'taCity'
    },
    {
        type:'text',
        displayName:'Travel Airport terminal',
        name:'taTerminal'
    },
    {
        type:'text',
        displayName:'Destination Airport name',
        name:'daName'
    },
    {
        type:'text',
        displayName:'Destination Airport sort name',
        name:'dasName'
    },
    {
        type:'text',
        displayName:'Destination Airport city',
        name:'daCity'
    },
    {
        type:'text',
        displayName:'Destination Airport terminal',
        name:'daTerminal'
    },
    {
        type:'time',
        displayName:'Arrival time',
        name:'aTime'
    },
    {
        type:'time',
        displayName:'Departure time',
        name:'dTime'
    },
    {
        type:'text',
        displayName:'Flight duration',
        name:'fDuration'
    },
    {
        type:'text',
        displayName:'Class',
        name:'class'
    },
    {
        type:'number',
        displayName:'Base fare',
        name:'bFare'
    },
    {
        type:'text',
        displayName:'Baggage check-In',
        name:'bCheckIn'
    },
    {
        type:'text',
        displayName:'Baggage cabin',
        name:'bCabin'
    },
    {
        type:'text',
        displayName:'Meal',
        name:'meal'
    }
]

function postData(itemData){
    axios.post(process.env.REACT_APP_STORE_FLIGHTS_DATA,
        {
            _id:itemData.trackCode,
            companyName:itemData.comName,
            trackingCode:itemData.trackCode,
            flightsRoute:itemData.flightsRoute,
            travelAirport:{name:itemData.taName, sName:itemData.tasName,city:itemData.taCity, terminal:itemData.taTerminal},
            destinationAirport:{name:itemData.daName, sName:itemData.dasName,city:itemData.daCity, terminal:itemData.daTerminal},
            arrivalTime:itemData.aTime,
            departureTime:itemData.dTime,
            flightDuration:itemData.fDuration,
            class:itemData.class,
            baseFare:itemData.bFare,
            baggageCheckIn:itemData.bCheckIn,
            baggageCabin:itemData.bCabin,
            meal:itemData.meal    
        }
    )
    .then(alert("Flight data successfully submited."))
}

function Admin() {
    const [itemData,setItemData]=useState({
        flightsRoute:'',comName:'',trackCode:'', taName:'',tasName:'',taCity:'',taTerminal:'',
        daName:'',dasName:'',daCity:'',daTerminal:'',aTime:'',dTime:'',fDuration:'',
        class:'',bFare:'',bCheckIn:'',bCabin:'',meal:''
    })

    function inputData(e){
        setItemData({...itemData,[e.target.name]:e.target.value})
    }
    function submitData(){
        postData(itemData)
    }
    return (
        <div>
            <center>
                <label>Flights Route: </label>
                <select name="flightsRoute" className='mt-2' onChange={(e)=>inputData(e)}>
                    <option value="">Select</option>
                    <option value="GOIDEL">GOA to DELHI</option>
                    <option value="DELGOI">DELHI to GOA</option>
                </select>
                {
                    planeInputAttribute.map((val,index)=>{
                        return(
                            <div key={index}>
                                {val.displayName+": "}
                                <Input
                                    type={val.type}
                                    name={val.name}
                                    className="mt-3"
                                    onChange={(e)=>inputData(e)}
                                />
                            </div>
                        )
                    })
                }
                <button type='submit' className=' mt-3 mb-3' onClick={submitData}>Submit</button>
            </center>
        </div>
    )
}

export default Admin
