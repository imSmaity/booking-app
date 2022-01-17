import React from 'react'
import { Loading } from '../../components/components'

export default function FareSummary({priceSummary,loading}) {

    return (
        <div className='fare tic mt-3'>
            <div id='ticHes'>FARE SUMMARY
            {
                priceSummary.child===0?
                <div className='text-black-50'>Travelers {priceSummary.adult} Adults</div>:
                <div className='text-black-50'>Travelers {priceSummary.adult} Adults | {priceSummary.child} Children</div>
            }
            </div>
            <div className='row tgs'>
                {
                    loading?
                    <>
                        {
                            priceSummary.child===0?
                            <>
                                <div className="col-6" >Adult Base Fare</div>
                                <div className="col-6" id="ts">{`₹${priceSummary.adultBaseFare.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                            </>:
                            <>
                                <div className="col-6" >Adult Base Fare</div>
                                <div className="col-6" id="ts">{`₹${priceSummary.adultBaseFare.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                                <div className="col-6" >Child Base Fare</div>
                                <div className="col-6" id="ts">{`₹${priceSummary.childBaseFare.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                            </>
                        }
                        
                        <div className="col-6" >Passenger Service Fee</div>
                        <div className="col-6" id="ts">₹{priceSummary.serviceFee}</div>
                        <div className="col-6">User Development Fee</div>
                        <div className="col-6" id="ts">₹{priceSummary.userFee}</div>
                        <div className="col-6">GST</div>

                        <div className="col-6" id="ts">₹{priceSummary.GST}</div>
                      
                        <div className="col-6">Charity Donation</div>
                        <div  className="col-6" id="ts">₹{priceSummary.donation}</div>
                        <div className="col-6 ta">Total Amount</div>

                        <div className="col-6 ta" id="ts">₹{priceSummary.totalAmmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>

                    </>:
                    <Loading/>
                }
                
            </div>
        </div>
    )
}
