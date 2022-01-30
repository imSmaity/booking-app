import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/components'
import HotelList from './HotelList'
import './hotels.css' 
import SortBy from './SortBy'


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

function Hotels() {
    const [hotelsData,setHotelsData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [sort,setSort]=useState('')
    const path=useParams()

    useEffect(()=>{
        axios.post(process.env.REACT_APP_GROUP_HOTEL_SEARCH,path)
        .then(res=>{
            setHotelsData(res.data)
            setLoading(true)
        })
    },[path])

    useEffect(()=>{
        if(sort==='lTOh'){
            setHotelsData(priceLHWiseSort(hotelsData,'price'))
        }
        else if(sort==='hTOl'){
            setHotelsData(priceHLWiseSort(hotelsData,'price'))
        }
    },[sort,hotelsData])

    return (
        <div className='row'>
            <div className='col-12 hac'>
                <Header/>
            </div>
            <div className='col-12'>
                <center>
                    <SortBy sort={sort} setSort={setSort}/>
                </center>
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
