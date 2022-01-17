

function PriceSummary({roomPrice}) {
    
    return (
        <div className='row mt-3 mr '>
            <div className="col-12 ab">Price Summary</div>
            <div className="col-6 mt-5">{`Room Charges (${roomPrice.room} room x ${roomPrice.night} night)`}</div>
            <div className="col-6 al mt-5">₹{roomPrice.price}</div>
            <div className="col-6 mt-5">Taxes & Fees</div>
            <div className="col-6 al mt-5">₹{roomPrice.tax}</div>
            <div className="col-6 mt-5"><strong>Payable Now</strong></div>
            <div className="col-6 al mt-5"><strong>₹{roomPrice.payable}</strong></div>
        </div>
    )
}

export default PriceSummary
