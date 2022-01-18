import React from 'react'
import { Paypal } from '../../../components/components'

function Payment({bookingDetails}) {


    return (
        <div className='row mr mt-5 container-fluid pay'>
            <div className='col-12 ar'>PAYMENT MODE</div>
            <div className='col-12'>
                <Paypal ammount={bookingDetails.roomPrice.payable} bookingDetails={bookingDetails} />
            </div>
        </div>
    )
}

export default Payment
