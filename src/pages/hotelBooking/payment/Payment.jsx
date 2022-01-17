import React from 'react'
import { Paypal } from '../../../components/components'

function Payment({roomPrice}) {


    return (
        <div className='row mr mt-5 container-fluid pay'>
            <div className='col-12 ar'>PAYMENT MODE</div>
            <div className='col-12'>
                <Paypal ammount={roomPrice.payable}/>
            </div>
        </div>
    )
}

export default Payment
