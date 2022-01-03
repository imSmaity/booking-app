import React from 'react'
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
        displayName:'Arival time',
        name:'aTime'
    },
    {
        type:'time',
        displayName:'Departure time',
        name:'dTime'
    },
    {
        type:'time',
        displayName:'Flight duration',
        name:'fDuration'
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



function Admin() {
    
    function submitData(){
    
    }
    return (
        <div>
            <center>
                {
                    planeInputAttribute.map((val,index)=>{
                        return(
                            <div key={index}>
                                {val.displayName+": "}
                                <Input
                                    type={val.type}
                                    name={val.name}
                                    className="mt-3"
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
