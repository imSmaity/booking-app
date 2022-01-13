
import { useState } from "react"



export default function Infant(){
    const [infant,setInfant]=useState([])
    

    function changeValue(e,i){
        const newValue=[...infant]
        newValue[i][e.target.name]=e.target.value
        setInfant(newValue)
    }

    function addNewInfant(){
        console.log(infant)
        if(infant.length<5){
            setInfant([...infant,{fmName:'',lName:'',dob:''}])
        }
        else{
            alert('Number of infants cannot be more than 5')
        }
    }
    
    function removeInfant(i){
        const deleteField=[...infant]
        deleteField.splice(i,1)
        setInfant(deleteField)
    }
    

    return (
        <div className='tdFrame mt-1'>
            {
                infant.map((val,index)=>{
                    return ( 
                        <div className='mt-3' key={index}>
                            <div>{`Infant ${index+1}:`}</div>
                            <input type='text' value={val.fmName} className='radioBtn' name='fmName' onChange={(e)=>changeValue(e,index)} />
                            <input type='text' value={val.lName} className='radioBtn' name='lName' onChange={(e)=>changeValue(e,index)} />
                            <span 
                                id='symbol'
                                title="remove" 
                                onClick={()=>removeInfant(index)}>❌
                            </span>
                            <div  className='radioBtn mt-3'>
                                <label >{'DOB: '}</label>
                                <input type='date' value={val.dob}  name='dob'  id="dob" onChange={(e)=>changeValue(e,index)} />
                            </div>
                        </div>
                    )
                })
                
            }
            <div className='addBtn'>
                <button className='mt-4' type='button' onClick={addNewInfant}>+ ADD NEW Infant</button>
            </div>
        </div>
    )
}