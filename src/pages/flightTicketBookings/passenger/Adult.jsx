
import {useState } from "react"



export default function Adult(){
    const [adult,setAdult]=useState([{fmName:'',lName:'',gender0:''}])
    

    function changeValue(e,i){
        const newValue=[...adult]
        newValue[i][e.target.name]=e.target.value
        setAdult(newValue)
    }

    function addNewAdult(){
        if(adult.length<15){
            setAdult([...adult,{fmName:'',lName:'',[`gender${adult.length}`]:''}])
        }
        else{
            alert('Number of adults cannot be more than 15')
        }
    }
    
    function removeAdult(i){
        const deleteField=[...adult]
        deleteField.splice(i,1)
        setAdult(deleteField)
    }
    

    return (
        <div className='tdFrame mt-1'>
            {
                adult.map((val,index)=>{
                    return ( 
                        <div className='mt-1' key={index}>
                            <div>{`ADULT ${index+1}:`}</div>
                            <input type='text' value={val.fmName} className='radioBtn' name='fmName' onChange={(e)=>changeValue(e,index)} />
                            <input type='text' value={val.lName} className='radioBtn' name='lName' onChange={(e)=>changeValue(e,index)} />
                            <span  className='radioBtn'>
                                <label >{'Male'}</label>
                                <input type='radio' value="Male"  name={`gender${index}`}  id="gender" onChange={(e)=>changeValue(e,index)} />
                                <label id="gender">{'Female'}</label>
                                <input type='radio' value="Female"  name={`gender${index}`}  id="gender"  onChange={(e)=>changeValue(e,index)} />
                            </span>
                            <span 
                                id='symbol'
                                title="remove" 
                                onClick={()=>removeAdult(index)}>❌
                            </span>
                        </div>
                    )
                })
                
            }
            <div className='addBtn'>
                <button className='mt-4' type='button' onClick={addNewAdult}>+ ADD NEW ADULT</button>
            </div>
        </div>
    )
}