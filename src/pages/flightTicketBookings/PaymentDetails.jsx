import React from 'react'
import { Paypal } from '../../components/components'


function PaymentDetails({loading,info,priceSummary}) {

    return (
        <div className='td'>
            {
                loading?
                <>
                    {
                        info?
                        <>
                            <div id='tdH'>PAYMENT DETAILS</div>
                            <Paypal ammount={priceSummary.totalAmmount}/>
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
