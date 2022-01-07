import React, { useState } from 'react'
import Adult from './passenger/Adult'
import Child from './passenger/Child'
import Infant from './passenger/Infant'
import TicketSent from './passenger/ticketSent/TicketSent'


function TravellerDetails({loading,setInfo}) {
    const [adultCount,setAdultCount]=useState([1])
    const [childCount,setChildCount]=useState([1])
    const [infantCount,setInfantCount]=useState([1])
    const [adultValue,setAdultValue]=useState(false)
    const [childValue,setChildValue]=useState(false)
    const [infantValue,setInfantValue]=useState(false)

    function addNewAdult(){
        if(adultCount.length+1<=15){
            setAdultCount([...adultCount,adultCount[adultCount.length-1]+1])
        }
        else{
            alert('Number of adults cannot be more than 15')
        }
    }


    function addNewChild(){

        if(childCount.length+1<=10){
            setChildCount([...childCount,childCount[childCount.length-1]+1])
        }
        else{
            alert('Number of child cannot be more than 10')
        }
    }

    function addNewInfant(){

        if(infantCount.length+1<=5){
            setInfantCount([...infantCount,infantCount[infantCount.length-1]+1])
        }
        else{
            alert('Number of infant cannot be more than 5')
        }
    }
    function _continue(){
        if(adultValue!==false || childValue!==false){
            console.log(adultValue)
            console.log(childValue)
            console.log(infantValue)
            setInfo(true)
        }
        else{
            alert("Please select minimum one adult or child details.")
        }
    }

    return (
        <>
            {
                loading?
                <>
                    <div className='td'>
                        <div id="tdH" >TRAVELLER DETAILS</div>
                        <div style={{fontSize:'small'}}>NOTE: Please make sure you enter the Name as per your govt. photo id.</div> 
                        <div className='mt-3'>{`ADULT (12 Yrs+)`}</div>
                        <Adult 
                            adultCount={adultCount}  
                            addNewAdult={addNewAdult}
                            adultValue={adultValue}
                            setAdultValue={setAdultValue}
                        />
                        <div className='mt-3'>{`CHILD (2-12 Yrs)`}</div>
                        <Child 
                            childCount={childCount}  
                            addNewChild={addNewChild}
                            childValue={childValue}
                            setChildValue={setChildValue}
                        />
                        <div className='mt-3'>{`INFANT (< 2 Yrs)`}</div>
                        <Infant
                            infantCount={infantCount}  
                            addNewInfant={addNewInfant}
                            infantValue={infantValue}
                            setInfantValue={setInfantValue}
                        />
                        <div className='mt-5' style={{borderTop:'1px solid darkgray'}}>Booking details will be sent to</div>
                        <div><TicketSent/></div>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2 continueBtn' onClick={_continue}>Continue</button>
                </>:
                <div></div>
            }
            
        </>
    )   
}

export default TravellerDetails
