import React from 'react'
import { Paypal, TestPaymentDetails } from '../../components/components'


function PaymentDetails({loading,info,bookingDetails}) {

    return (
        <div className='td'>
            {
                loading?
                <>
                    {
                        info?
                        <>
                            <div id='tdH'>PAYMENT DETAILS</div>
                            <TestPaymentDetails/>
                            <Paypal ammount={bookingDetails.priceSummary.totalAmmount} bookingDetails={bookingDetails}/>
                        </>:
                        <div>PAYMENT DETAILS</div>
                    }
                    
                </>:
                <div></div>
            }
            
        </div>
    )
}

export default PaymentDetails
