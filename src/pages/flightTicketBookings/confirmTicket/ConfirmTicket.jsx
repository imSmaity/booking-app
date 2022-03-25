import React, { useContext, useRef } from 'react'
import {Header} from '../../../components/components'
import { UserState } from '../../../routes/PageRoutes'
import { Login } from '../../pages'
import PrintTicket from './PrintTicket'
import {useReactToPrint} from 'react-to-print'

function ConfirmTicket() {
    const {state}=useContext(UserState)
    const componentRef=useRef(null)

    const handlePrint=useReactToPrint({
        content: ()=> componentRef.current
    })
    return (
        <>
            {
                state?
                <div className='row'>
                    <div className='col-12 hac'>
                        <Header/>
                    </div>
                    <h5 className='col-12 m-2'>Ticket Confirmed</h5>
                    <div className='col-12 m-3'>
                        <button onClick={handlePrint} className='btn btn-warning'>Print</button>
                    </div>
                    <div className='col-12' ref={componentRef}>
                        <PrintTicket/>
                    </div>
                </div>:
                <Login/>
            }
        </>
        
    )
}

export default ConfirmTicket
