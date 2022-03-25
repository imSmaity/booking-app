
export default function ConfirmPage({ticket}) {
    

    return (
        <div className='row container'>
            <h4 className='col-6 trs mt-3 ths p-2' style={{fontFamily: `'Inspiration', cursive`}}>myDestination</h4>
            <h5 className='col-6 mt-4 ths p-2' style={{textAlign:'right'}}>Hotel Confirmation Voucher</h5>
            <div className='col-12 p-2 m-2 tabTr'>{`Guest Name: ${ticket.guest[0].fname} ${ticket.guest[0].lname}`}</div>
            <h5 className='col-12'>{ticket.hotelData.name}</h5>
            <div className='col-12 tabTr p-2'>    
                <div className='row '>
                    <div className="col-4 mt-2">
                        <div>{ticket.hotelData.address}</div>
                    </div>
                    <div className="col-4" style={{textAlign:'center'}}>Check IN
                        <div >{new Date(ticket.query.checkInDate).toDateString()}</div>
                    </div>
                    <div className="col-4" style={{textAlign:'center'}}>Check OUT
                        <div >{new Date(ticket.query.checkOutDate).toDateString()}</div>
                    </div>
                </div>
            </div>
            <div className='col-12 tabTr p-2'>
                <div className='row mt-3'>
                    <div className='col-3'>
                        <div className='mt-2'>Room Type</div>
                        <div className='mt-2'>{`Room ${ticket.roomPrice.room}:`}</div>
                    </div>
                    <div className='col-3'>
                        <div className='mt-2'>{ticket.hotelData.room}</div>
                        <div className='mt-2'>{`${ticket.guest.length} Guest`}</div>
                    </div>
                    <div className='col-3'>
                        <div className='mt-2'>Room Charges:</div>
                        <div className='mt-2'>Taxes & Fees:</div>
                        <div className='mt-2'>Total Amount Paid:</div>
                    </div>
                    <div className='col-3'>
                        <div className='mt-2'>₹{ticket.roomPrice.price}</div>
                        <div className='mt-2'>₹{ticket.roomPrice.tax}</div>
                        <div className='mt-2'>₹{ticket.roomPrice.payable}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
