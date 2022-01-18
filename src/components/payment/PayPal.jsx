import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import {useNavigate} from 'react-router-dom'

export default function PayPal({ammount,bookingDetails}) {

    const paypal=useRef()
    const navig=useNavigate()

    function BookingDataStore(status,data){
      const userData=JSON.parse(localStorage.getItem("mbuser"))
      if(status==="COMPLETED" && userData!==null){
          userData.bookings.push(data)
          axios.post(process.env.REACT_APP_UPDATE_USER,userData)
          .then(()=>{
              localStorage["mbuser"]=JSON.stringify(userData)
              navig('/ticket_confirm')
          })
      }
      else{
          console.log("Payment failed!")
      }
    
    }
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
                      value: (1/59).toFixed(2),
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();

              BookingDataStore(order.status,bookingDetails)
            },
            onError:(err) => {
              console.log(err);
            },
        }).render(paypal.current)
    },[])

    return <div ref={paypal} className='mt-5'></div>
}
