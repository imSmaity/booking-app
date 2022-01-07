import React from 'react'
import PayPal from './payment/PayPal'

function PaymentDetails({loading,info}) {

    return (
        <div className='td'>
            {
                loading?
                <>
                    {
                        info?
                        <>
                            <div id='tdH'>PAYMENT DETAILS</div>
                            <PayPal/>
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
