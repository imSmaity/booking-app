import Adult from './passenger/Adult'
import Child from './passenger/Child'
import Infant from './passenger/Infant'
import TicketSent from './passenger/ticketSent/TicketSent'



function TravellerDetails({loading,setInfo}) {

    function _continue(){
        // if(adultValue!==false || childValue!==false){
        //     setInfo(true)
        // }
        // else{
        //     alert("Please select minimum one adult or child details.")
        // }
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
                        <Adult/>      
                        <div className='mt-3'>{`CHILD (2-12 Yrs)`}</div>
                        <Child />    
                        <div className='mt-3'>{`INFANT (< 2 Yrs)`}</div>
                        <Infant/>       
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




