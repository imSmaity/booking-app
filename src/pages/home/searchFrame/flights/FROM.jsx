import { airportData } from './airportDatabase'

function FROM({travelAirport,displayTravelAirport}){
    return(
        <ul className="dropdown-menu" >
            <li>
            {
                airportData.map((airport,index)=>{
                    return(
                        <div className="dropdown-item" id='cname' key={index} 
                            onClick={()=>{travelAirport(airport.sortName) 
                            displayTravelAirport(airport.name,airport.location)}}>{airport.location}
                            <div id='aname'>{airport.name} 
                                <span id='asname'>{airport.sortName}</span>
                            </div>
                        </div>
                    )
                })
                
            }
                
            </li>
        </ul>
    )
}
export default FROM