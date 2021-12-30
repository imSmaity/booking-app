import React, { useRef, useState } from 'react'
import Flights from './flights/Flights'
import Hotels from './hotels/Hotels'
import './searchf.css'

export default function SearchFrame() {
    const [searchType,setSearchType]=useState("Flights")
    const flight=useRef("")
    const hotel=useRef("")
    function inputSearchType(){
        setSearchType(searchType===flight.current.value?hotel.current.value:flight.current.value)
    }
    
    return (
        <div className='row sfc container'>
            <div className='col-12'>
                <div className='btnc'>
                    <input type='radio' id='flights' name='stype' value={"Flights"} ref={flight} onClick={inputSearchType} defaultChecked={true}/>
                    <label htmlFor="flights">Flights</label>
                    <input type='radio' id='hotels' name='stype' value={"Hotels"}  ref={hotel} onClick={inputSearchType} />
                    <label htmlFor="hotels">Hotels</label>
                </div>
            </div>
            <div className='col-12'>
                <div className='row sframe'>
                {
                    searchType==="Flights"?
                    <Flights/>:
                    <Hotels/>
                }
                </div>
            </div>
            <div className="col-5"></div>
            <div className='col-2 searb'>
                <button type='button' id='search'>SEARCH</button>
            </div>
            <div className="col-5"></div>
        </div>
    )
}
