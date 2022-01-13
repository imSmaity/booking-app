import { useContext } from 'react'
import { Passenger } from './FlightTicketBook'
import Adult from './passenger/Adult'
import Child from './passenger/Child'
import Infant from './passenger/Infant'
import TicketSent from './passenger/ticketSent/TicketSent'

function validFields(adult,child,infant){
    let valid=true

    for(let i=0;i<adult.length;i++){
        if(adult[i].fmName===''||adult[i].lName===''||adult[i][`gender${i}`]===''){
            valid=false
        }
    }
    for(let i=0;i<child.length;i++){
        if(child[i].fmName===''||child[i].lName===''||child[i][`cgender${i}`]===''){
            valid=false
        }
    }
    for(let i=0;i<infant.length;i++){
        if(infant[i].fmName===''||infant[i].lName===''||infant[i].dob===''){
            valid=false
        }
    }
    return valid
}

function TravellerDetails({loading,setInfo}) {
    const {adult,setAdult,child,setChild,infant,setInfant}=useContext(Passenger)

    function _continue(){
        if(validFields(adult,child,infant)){
            setInfo(true)
        }
        else{
            alert("Please fill all the input fields.")
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
                            adult={adult} 
                            setAdult={setAdult}
                        />      
                        <div className='mt-3'>{`CHILD (2-12 Yrs)`}</div>
                        <Child 
                            child={child}
                            setChild={setChild}
                        />    
                        <div className='mt-3'>{`INFANT (< 2 Yrs)`}</div>
                        <Infant
                            infant={infant}
                            setInfant={setInfant}
                        />       
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




