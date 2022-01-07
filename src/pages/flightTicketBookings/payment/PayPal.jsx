import React, { useEffect, useRef } from 'react'

export default function PayPal() {

    const paypal=useRef()

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
                      value: 1.0,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
            },
            onError:(err) => {
              console.log(err);
            },
        }).render(paypal.current)
    },[])

    return <div ref={paypal} className='mt-5'></div>
}
