
import { Loading } from '../../components/components'

export default function Ticket({flightDetails,loading}) {
    return (
        <div className='tic mt-3'>
            <div id="ticHe">TICKET DETAILS</div>
            {
                loading?
                    <>
                        <div id='city'>{`${flightDetails.travelAirport.city} - ${flightDetails.destinationAirport.city}`}</div>

                        <div className='row container ticInfo' >
                            <div className="col-2">
                                <div id="chText">{flightDetails.companyName}</div>
                                <div id="chText">{flightDetails.class}</div>
                                <div id="chText">{flightDetails.trackingCode}</div>
                            </div>
                            <div className="col-4">
                                <div></div>
                                <div>{flightDetails.travelAirport.sName}
                                    <span style={{marginLeft:'1vh'}}>{flightDetails.arrivalTime}</span>
                                </div>
                                <div id="chText">{flightDetails.travelAirport.name}</div>
                                <div id="chText">{flightDetails.travelAirport.city}</div>
                            </div>
                            <div className="col-2">
                                <div>{flightDetails.flightDuration}</div>
                                <div id="chText">Flight Duration</div>
                            </div>
                            <div className="col-4">
                                <div>{flightDetails.destinationAirport.sName}
                                    <span style={{marginLeft:'1vh'}}>{flightDetails.departureTime}</span>
                                </div>
                                <div id="chText">{flightDetails.destinationAirport.name}</div>
                                <div id="chText">{flightDetails.destinationAirport.city}</div>
                            </div>
                            <div className='col-12' style={{borderTop:'1px solid darkgray',padding:'1vh'}}>
                                <div id="chText">{`Baggage: ${flightDetails.baggageCheckIn} Check-In, ${flightDetails.baggageCabin} Cabin`}</div>
                            </div>
                        </div>
                    </>:
                <Loading/>
            }
        </div>
    )
}
