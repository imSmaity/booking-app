import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import {useNavigate} from 'react-router-dom'

export default function PayPal({ammount,bookingDetails}) {

    const paypal=useRef()
    const navig=useNavigate()

    useEffect(()=>{
        window.paypal.Buttons({
        createOrder: (data, actions, err) => {
            return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Cool looking table",
                    amount: {
                      currency_code: "CAD",
                      value: (100/59).toFixed(2),
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              const userData=JSON.parse(localStorage.getItem("mbuser"))

              if(order.status==="COMPLETED" && userData!==null){
                  if(bookingDetails.bookingType==="H"){
                    userData.hotelBookings.push(bookingDetails)
                    axios.post(process.env.REACT_APP_UPDATE_USER,userData)
                    .then(()=>{
                        localStorage["mbuser"]=JSON.stringify(userData)
                        navig('/hotel_book_confirm')
                    })
                  }
                  else{
                    userData.flightBookings.push(bookingDetails)
                    axios.post(process.env.REACT_APP_UPDATE_USER,userData)
                    .then(()=>{
                        localStorage["mbuser"]=JSON.stringify(userData)
                        navig('/ticket_confirm')
                    })
                  }
                    
              }
            },
            onError:(err) => {
              console.log(err);
            },
        }).render(paypal.current)
    },[ammount,bookingDetails,navig])

    return <div ref={paypal} className='mt-5 ticInfo'></div>
}
