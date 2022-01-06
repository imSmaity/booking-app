import React, { useState } from 'react'
import { Input } from '../../components/components'

const adultAttribute=[
    {
        placeholder:'First & Middle Name',
        type:'text',
        name:'fmName'
    },
    {
        placeholder:'Last Name',
        type:'text',
        name:'lName'
    },
    {
        type:'radio',
        value:'MALE',
        name:'gender'
    },
    {
        type:'radio',
        value:'FEMALE',
        name:'gender'
    }
]
function NewAdult(){
    return(
        adultAttribute.map((val,index)=>{
            if(val.type==='radio'){
                return(
                    <span key={index} className='radioBtn'>
                        <label>{val.value}</label>
                        <Input type={val.type} className='radioBtn' name={val.name}/>
                    </span>
                )
            }
            else{
                return <Input key={index} className='radioBtn mt-2' type={val.type} placeholder={val.placeholder} name={val.name} />
            }
        })
    )
}

function TravellerDetails({loading}) {
    const [adultCount,setAdultCount]=useState([1])
    function addNewAdult(){
        if(adultCount.length+1<=15){
            setAdultCount([...adultCount,adultCount[adultCount.length-1]+1])
        }
        else{
            alert('Number of adults cannot be more than 15')
        }
    }
    return (
        <>
            {
                loading?
                <div className='td'>
                    <div id="tdH" >TRAVELLER DETAILS</div>
                    <div style={{fontSize:'small'}}>NOTE: Please make sure you enter the Name as per your govt. photo id.</div> 
                    <div className='tdFrame mt-3'>
                        <div>{
                            adultCount.map((val)=>{
                                return ( 
                                    <div className='mt-4' key={val}>
                                        <div>{`ADULT ${val}:`}</div>
                                        {NewAdult()}
                                    </div>
                                )
                            })
                        }</div>
                        <div className='addBtn'>
                            <button className='mt-4' type='button' onClick={addNewAdult}>+ ADD NEW ADULT</button>
                        </div>
                    </div>
                </div>:
                <div></div>
            }
            
        </>
    )   
}

export default TravellerDetails
