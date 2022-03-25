import React, { useState } from 'react'
import warning from '../../Assets/warning.png'

export default function TestPaymentDetails() {
    const [detail,setDetails]=useState(false)

  return (
    <div className='p-3'>
        <img src={warning} alt='warning' onMouseOver={()=>setDetails(true)} onMouseOut={()=>setDetails(false)}/>
        <span className='ms-2' style={{fontSize:'small'}}>
        <strong>Email:</strong> sb-osl43i11018844@personal.example.com
        <div className='ms-4'><strong>Password:</strong>{` ${'"z${Svo6'}`}</div></span>
        {detail && <div style={{position:"absolute",fontSize:'small',background:"white"}} className='p-1'>Test payment details</div>}
    </div>
  )
}
