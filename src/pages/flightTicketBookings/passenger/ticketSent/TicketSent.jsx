

import React from 'react'
import { Input } from '../../../../components/components'

export default function TicketSent() {
    const bookingAttribute=[
        {
            type:'number',
            placeholder:'Phone No'
        },
        {
            type:'email',
            placeholder:'Email'
        }
    ]
    return (
        <div className='mt-3'>
        {
            bookingAttribute.map((val,index)=>{
                return ( 
  
                    <Input
                        type={val.type}
                        placeholder={val.placeholder}
                        key={index}
                        style={{marginLeft: '2vh'}}
                    />

                )
            })
        }
        </div>
    )
}
