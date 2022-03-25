import React, { useContext } from 'react'
import { GuestDetails } from '../../../routes/PageRoutes'

function GuestsDetails() {
   const {guest,setGuest}=useContext(GuestDetails)

    function inputValue(e,i){
        const arr=[...guest]
        arr[i][e.target.name]=e.target.value
        setGuest(arr)
    }
    function addNewGuest(){
        setGuest([...guest,{fname:'',lname:''}])
    }

    function removeGuest(i){
        const arr=[...guest]
        arr.splice(i,1)
        setGuest(arr)
    }
    return (
        <div className='row mr mt-5 pay container-fluid p-2'>
            <div className="col-12 ar  ab">GUEST DETAILS</div>
            {
                guest.map((guestNumber,index)=>{
                    return(
                        <div className='row' key={index}>
                            <div className="col-md-4 col-12 ar mt-2">
                                <div>First Name</div>
                                <input 
                                    type={'text'} 
                                    value={guestNumber.fname} 
                                    name='fname' 
                                    placeholder='Enter First Name'
                                    onChange={(e)=>inputValue(e,index)}
                                />
                            </div>
                            <div className="col-md-5 col-12 ar mt-2">
                                <div>Last Name</div>
                                <input 
                                    type={'text'} 
                                    value={guestNumber.lname} 
                                    name='lname' 
                                    placeholder='Enter Last Name'
                                    onChange={(e)=>inputValue(e,index)} 
                                />
                                <button 
                                    id='symbol'
                                    title="remove" 
                                    disabled={guest.length>1?false:true}
                                    onClick={()=>removeGuest(index)}>❌
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            
            <div className='ar mt-3' onClick={addNewGuest} style={{color:'blue'}}>Add Guest</div>
            <div className="col-md-4 col-12 ar mt-2">
                <div>Email Address</div>
                <input type={'text'} name='email' placeholder='Enter Email Address'/>
            </div>
            <div className="col-md-4 col-12 ar mt-2">
                <div>Mobile Number</div>
                <input type={'text'} name='phNo' placeholder='Enter Mobile Number'/>
            </div>
        </div>
    )
}

export default GuestsDetails
