import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../../components/components'
import FlightList from './FlightList'
import SortBy from './SortBy'

function durationWiseSort(data,sort){
    data.sort((a,b)=>{
        if(a[sort]<b[sort]) return -1
        if(a[sort]>b[sort]) return 1

        return 0
    })
    return [...data]
}
function priceLHWiseSort(data,sort){
    data.sort((a,b)=>{
        if(a[sort]<b[sort]) return -1
        if(a[sort]>b[sort]) return 1

        return 0
    })
    return [...data]
}
function priceHLWiseSort(data,sort){
    data.sort((a,b)=>{
        if(a[sort]<b[sort]) return 1
        if(a[sort]>b[sort]) return -1

        return 0
    })
    return [...data]
}


function Flights() {
    const [flightsData,setFlightsData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [sort,setSort]=useState('')
    const path=useParams()

    useEffect(()=>{
        axios.post(process.env.REACT_APP_GROUP_FLIGHT_SEARCH,{collection:path.searchId})
        .then(
            res=>{
                setFlightsData(res.data)
                setLoading(true)
            }
        )
    },[path.searchId])
    
    function sortByPrice(e){
        setSort(e.target.value)
        if(e.target.value === 'lTOh'){
            setFlightsData(priceLHWiseSort(flightsData,'baseFare'))
        }
        else if(e.target.value === 'hTOl'){
            setFlightsData(priceHLWiseSort(flightsData,'baseFare'))
        }
    }

    function durationSort(d){
        setSort(d)
        setFlightsData(durationWiseSort(flightsData,'flightDuration'))
    }

    return (
        <>
         <div className='row'>
            <div className='col-12 hac'>
                <Header/>
            </div>
            <div className='12'>
                <center>
                    <SortBy sort={sort} sortByPrice={sortByPrice} durationSort={durationSort}/>
                </center>
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
