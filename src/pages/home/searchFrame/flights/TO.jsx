import { airportData } from './airportDatabase'

function TO({destinationAirport,displayDestinationAirport}){
    return(
        <ul className="dropdown-menu" >
            <li>
            {
                airportData.map((airport,index)=>{
                    return(
                        <div className="dropdown-item" id='cname' key={index} 
                            onClick={()=>{destinationAirport(airport.sortName)
                            displayDestinationAirport(airport.name,airport.location)}}>
                            {airport.location}
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


export default TO