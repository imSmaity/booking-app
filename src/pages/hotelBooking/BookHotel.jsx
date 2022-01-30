import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Payment from './payment/Payment'
import GuestsDetails from './guests/GuestsDetails'
import PriceSummary from './priceSummary/PriceSummary'
import HotelInfo from './hotelInfo/HotelInfo'
import {Header} from '../../components/components'
import './book_hotel.css'
import { GuestDetails } from '../../routes/PageRoutes'


function BookHotel() {
    const {guest}=useContext(GuestDetails)
    const [hotelData,setHotelData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [proceedToPayment,setToPayment]=useState(false)
    const [roomPrice,setRoomPrice]=useState({room:'',night:'',price:'',tax:'',payable:''})
    const [bookingDetails, setBookingDetails]=useState(null)

    const path=useParams()
    const query=JSON.parse(path.query)

    useEffect(()=>{
        axios.post(process.env.REACT_APP_HOTEL_SEARCH,path)
        .then(res=>{
            setHotelData(res.data)
            setLoading(true)
        })
    },[path])

    useEffect(()=>{
        if(loading){
            setBookingDetails({bookingType:"H",bookingDate:new Date().toDateString() ,hotelData, guest, roomPrice, query})
        }
    },[guest,roomPrice,loading,hotelData,query])

    useEffect(()=>{

        if(loading){
            let room=0
            const co=new Date(query.checkOutDate).getDate()
            const ci=new Date(query.checkInDate).getDate()
            const night=co-ci

            if(guest.length<=hotelData.gPerRoom){
                room=1
            }
            else if(guest.length%hotelData.gPerRoom===0){
                room=Math.round(guest.length/hotelData.gPerRoom)
            }
            else{
                room=Math.round(guest.length/hotelData.gPerRoom)+1
            }
            
            const price=hotelData.price*(room*night)
            setRoomPrice(
                {room:room,night:night,price:price,tax:price*(18/100),payable:price+price*(18/100)}      
            )
        }
    },[guest,loading,hotelData.gPerRoom,hotelData.price,query.checkInDate,query.checkOutDate])

    function validation(){
        let state=false
        for(let i=0;i<guest.length;i++){
            if(guest[i].fname==='' || guest[i].lname===''){
                alert('Please fill all the guest details')
                state=false
                i=guest.length
            }
            else{state=true}
        }
        return state
    }

    return (
        <div className='row'>
            {
                loading?
                <>
                    <div className="col-12 hac">
                        <Header/>
                    </div>
                    <div className='col-md-8 col-12'>
                        <HotelInfo hotelData={hotelData}/>
                    </div>
                    <div className='col-md-4 col-12'>
                        <PriceSummary roomPrice={roomPrice}/>
                    </div>
                    <div className='col-12'>
                        {
                            proceedToPayment?
                            <div id='ed' className='mr mt-3 mr ab'>Guest Details
                                <span  onClick={()=>setToPayment(false)} style={{color:'blue'}}>edit</span>
                            </div>:
                            <>
                                <center>
                                    <GuestsDetails/>
                                </center>
                                <button type='button' style={{marginLeft:'9vh'}} className='mt-2' onClick={
                                    ()=>{
                                        setToPayment( validation())
                                    }
                                }>Proceed To Payment Options</button>
                            </>
                        }
                        
                    </div>
                    <div className="col-12">
                    {
                        proceedToPayment?
                        <center>
                            <Payment bookingDetails={bookingDetails}/>
                        </center>:
                        <div className='mr mt-3 ab'>Payment Options</div>
                    }
                    </div>
                </>:
                <div>Loading...</div>
            }
            
        </div>
    )
}

export default BookHotel
