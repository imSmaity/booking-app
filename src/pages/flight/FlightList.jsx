import { Link } from "react-router-dom"
import { Loading } from "../../components/components"
import './flights.css'

function FlightList({loading,flightsData,path}){
    if(loading){
        return(
            
            flightsData.map((flight,index)=>{
                if(flight.class === path.classId){
                    return (
                        <div className="row container fl" key={index}>
                            <div className="col-3" key={index}>
                                <div>
                                    <strong>{flight.companyName}</strong>
                                </div>
                                <div>{flight.travelAirport.sName}
                                    <span style={{marginLeft:'1vh'}}>{flight.travelAirport.city}</span>
                                </div>
                                <div>{flight.arrivalTime}</div>
                            </div>
                            <div className="col-2">
                                <div>{flight.flightDuration}</div>
                            </div>
                            <div className="col-3">
                                <div>{flight.destinationAirport.sName}
                                    <span style={{marginLeft:'1vh'}}>{flight.destinationAirport.city}</span>
                                </div>
                                <div>{flight.departureTime}</div>
                            </div>
                            <div className="col-2">
                                <div>{`₹ ${flight.baseFare.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                            </div>
                            <div className="col-2">
                                <Link to={flight.trackingCode}>
                                    <button type='button'>BOOK</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })
            
        )
    }
    else{
        return <Loading/>
    }
}

export default FlightList