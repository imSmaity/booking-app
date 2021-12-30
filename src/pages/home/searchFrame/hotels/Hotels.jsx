import React, { useState } from 'react'
import './hotels.css'

const getTodaysDate=()=>{
    const d=new Date()
    return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
}

export default function Hotels() {
    const [checkIn,setCheckIn]=useState(getTodaysDate)

    return (
        <>
            <div className="col-sm-4 col-12">
                <label  htmlFor="from" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" >CITY</label>
                <ul className="dropdown-menu" >
                    <li>
                        <a className="dropdown-item" id='cname'>Goa
                            <span id='hsname'>City</span>
                            <div id='haname'>India</div>
                        </a>
                    </li>
                </ul>
                <div>
                    <div id="csname">Goa</div>
                    <div id='adname'>India</div>
                </div>
            </div>
        
            <div className="col-sm-4 col-12">
                <label  htmlFor="dept">CHECK-IN:</label>
                <div className='mt-2'>
                    <input type='date' id='dateset' value={checkIn} className='date' onChange={(e)=>setCheckIn(e.target.value)}/>
                </div>
            </div>
            <div className="col-sm-4 col-12">
                <label  htmlFor="dept">CHECK-OUT:</label>
                <div className='mt-2'>
                    <input type='date' id='dateset' className='date' />
                </div>
            </div>
        </>
    )
}
