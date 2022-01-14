import axios from 'axios'
import React, { useState } from 'react'
import { Input } from '../../components/components'

const inputAttribute=[
    {
        type:'text',
        placeholder:'Code',
        name:'_id'
    },
    {
        type:'text',
        placeholder:'Name',
        name:'name'
    },{
        type:'text',
        placeholder:'Image',
        name:'image'
    },
    {
        type:'text',
        placeholder:'Area',
        name:'place'
    },
    {
        type:'text',
        placeholder:'City',
        name:'city'
    },
    {
        type:'text',
        placeholder:'Address',
        name:'address'
    },
    {
        type:'text',
        placeholder:'Room',
        name:'room'
    },
    {
        type:'number',
        placeholder:'Price',
        name:'price'
    },
    {
        type:'number',
        placeholder:'Guests per room',
        name:'gPerRoom'
    }
]

function HotelDataStore() {
    const [hotelData,setHotelData]=useState({_id:'',name:'',image:'',place:'',city:'',address:'',room:'',price:'',gPerRoom:''})


    function changeData(e){
        setHotelData({...hotelData,[e.target.name]:e.target.value})
    }
    function submitData(){
        axios.post(process.env.REACT_APP_STORE_HOTELS_DATA,hotelData)
        .then(alert("Data stored"))
    }
    return (
        <center>
            {
                inputAttribute.map((val,index)=>{
                    return(
                        <div key={index}>
                            <Input
                                type={val.type}
                                placeholder={val.placeholder}
                                name={val.name}
                                className='mt-4'
                                onChange={(e)=>changeData(e)}
                            />
                        </div>
                    )
                })
            }
            <button type='button' className='mt-4' onClick={submitData}>Submit</button>
        </center>
    )
}

export default HotelDataStore
