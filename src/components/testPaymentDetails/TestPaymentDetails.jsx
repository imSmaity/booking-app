import React, { useState } from 'react'
import warning from '../../Assets/warning.png'


const paymentDetails={
  email:'sb-lhqpk11017525@business.example.com',
  password:'&wK7!fn+'
}

export default function TestPaymentDetails() {
    const [detail,setDetails]=useState(false)

  return (
    <div className='p-3'>
        <img src={warning} alt='warning' onMouseOver={()=>setDetails(true)} onMouseOut={()=>setDetails(false)}/>
        <span className='ms-2' style={{fontSize:'small'}}>
        <strong>Email: </strong> {paymentDetails.email}
        <div className='ms-4'><strong>Password: </strong>{paymentDetails.password}</div></span>
        {detail && <div style={{position:"absolute",fontSize:'small',background:"white"}} className='p-1'>Test payment details</div>}
    </div>
  )
}
