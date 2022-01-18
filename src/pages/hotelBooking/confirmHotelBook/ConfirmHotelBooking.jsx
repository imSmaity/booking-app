import React, { useContext, useRef } from 'react'
import {Header} from '../../../components/components'
import { UserState } from '../../../routes/PageRoutes'
import { Login } from '../../pages'
import ConfirmPage from './ConfirmPage'
import './ticket.css'
import {useReactToPrint} from 'react-to-print'


function ConfirmHotelBooking() {
    const {state}=useContext(UserState)
    const componentRef=useRef(null)

    const handlePrint=useReactToPrint({
        content: ()=>componentRef.current
    })
    return (
        <div className='row'>
        {
            state?
            <>
                <div className='col-12 hac'><Header/></div>
                <h5 className='col-12 m-2'>Booking Confirmed</h5>
                <div className='col-12 m-3'>
                    <button onClick={handlePrint}>Print</button>
                </div>
                <div className='col-12' ref={componentRef}><ConfirmPage/></div>
            </>:
            <Login/>
        }
            
        </div>
    )
}

export default ConfirmHotelBooking
