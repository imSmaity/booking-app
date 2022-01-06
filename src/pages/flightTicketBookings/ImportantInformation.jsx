import React from 'react'
import { Loading } from '../../components/components'

function ImportantInformation({loading}) {
    return (
        <div  className='iInfo'>
        {
            loading?
            <>
                <div style={{color:'red'}}>IMPORTANT INFORMATION</div>
                <div style={{fontSize:'small'}}>Please read the below information carefully before proceeding towards making the payment.</div>
                <ul>
                    <li>Quarantine rules : None for domestic travellers. For travellers coming from all other countries, there might be random testing done at the airport. If they test negative, they can exit the airport and self-monitor their health for 14 days.</li>
                    <li>Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass.</li>
                    <li>Please reach at least 2 hours prior to flight departure.</li>
                    <li><strong>The latest DGCA guidelines state that it is compulsory to wear a mask that covers the nose and mouth properly while at the airport and on the flight. Any lapse might result in de-boarding.</strong></li>
                    <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. Additional pieces of Baggage will be subject to additional charges per piece in addition to the excess baggage charges.</li>
                    <li>Remember to download the baggage tag(s) and affix it on your bag(s).</li>
                    <li><strong>DISCLAIMER: The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued 
                    by the State Governments and Airlines before travelling to ensure smooth travel. We accept no liability in this regard. In case you do not meet the required guidelines, the airline or state authorities can stop you from travelling.</strong></li>
                </ul>
            </>:
            <Loading/>
        }
            
        </div>
    )
}

export default ImportantInformation
