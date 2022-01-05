import React from 'react'
import { Loading } from '../../components/components'

export default function FareSummary({flightDetails,loading}) {
    return (
        <div className='fare tic mt-3'>
            <div id='ticHes'>FARE SUMMARY</div>
            <div className='row tgs'>
                {
                    loading?
                    <>
                        <div className="col-6" >Base Fare</div>
                        <div className="col-6" id="ts">{`₹${flightDetails.baseFare.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                        <div className="col-6" >Passenger Service Fee</div>
                        <div className="col-6" id="ts">₹91</div>
                        <div className="col-6">User Development Fee</div>
                        <div className="col-6" id="ts">₹300</div>
                        <div className="col-6">GST</div>
                       
                        {
                            flightDetails.class==="Business"?
                            <div className="col-6" id="ts">₹{(flightDetails.baseFare)*(12/100)}</div>:
                            <div className="col-6" id="ts">₹{(flightDetails.baseFare)*(5/100)}</div>
                        }
                      
                        <div className="col-6">Charity Donation</div>
                        <div  className="col-6" id="ts">₹10</div>
                        <div className="col-6 ta">Total Amount</div>
                        {
                            
                            flightDetails.class==="Business"?
                            <div className="col-6 ta" id="ts">₹
                                {(flightDetails.baseFare+91+300+(flightDetails.baseFare)*(12/100)+10)
                                    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                }
                            </div>:
                            <div className="col-6 ta" id="ts">₹
                                {(flightDetails.baseFare+91+300+(flightDetails.baseFare)*(5/100)+10)
                                    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                }
                            </div>
                        
                        }
                    </>:
                    <Loading/>
                }
                
            </div>
        </div>
    )
}
