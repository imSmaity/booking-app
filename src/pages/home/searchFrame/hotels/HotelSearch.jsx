import moment from 'moment'
import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import { InputDate } from '../../../../routes/PageRoutes'
import './hotels.css'



const cityList=['Goa','Kolkata','Delhi','Mumbai']
// const getTodaysDate=()=>{
//     const d=new Date()
//     return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
// }

export default function HotelSearch({hotelsBookingCity}) {
    const {date,setDate}=useContext(InputDate)
    const [hotelCity,setHotelCity]=useState('Goa')

    return (
        <>
            <div className="col-lg-4 col-12">
                <label  htmlFor="from" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" id='tfs'>CITY</label>
                <ul className="dropdown-menu" >
                    <li>
                    {
                        cityList.map((val,index)=>{
                            return(
                                <div key={index} 
                                    onClick={()=>{
                                        hotelsBookingCity(val)
                                        setHotelCity(val)
                                    }}>
                                    <div className="dropdown-item" id='cname'>{val}
                                        <span id='hsname'>City</span>
                                        <div id='haname'>India</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </li>
                </ul>
                <div>
                    <div id="csname">{hotelCity}</div>
                    <div id='adname'>India</div>
                </div>
                    
            </div>
        
            <div className="col-lg-4 col-12">
                <label  htmlFor="dept" id='tfs'>CHECK-IN:</label>
                <div className='mt-2'>
                    <DatePicker selected={date.checkInDate} id='dateset'  minDate={moment().toDate()} onChange={(e)=>setDate({...date,checkInDate:e})}/>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <label  htmlFor="dept" id='tfs'>CHECK-OUT:</label>
                <div className='mt-2'>
                    <DatePicker selected={date.checkOutDate} id='dateset'  minDate={moment().toDate()} onChange={(e)=>setDate({...date,checkOutDate:e})}/>
                </div>
            </div>
        </>
    )
}
