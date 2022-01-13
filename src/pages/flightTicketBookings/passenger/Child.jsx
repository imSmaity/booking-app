
import { useState } from "react"



export default function Child(){
    
    
    const [child,setChild]=useState([])
    

    function changeValue(e,i){
        const newValue=[...child]
        newValue[i][e.target.name]=e.target.value
        setChild(newValue)
    }

    function addNewChild(){
        if(child.length<10){
            setChild([...child,{fmName:'',lName:'',[`gender${child.length}`]:''}])
        }
        else{
            alert('Number of childs cannot be more than 10')
        }
    }
    
    function removeChild(i){
        const deleteField=[...child]
        deleteField.splice(i,1)
        setChild(deleteField)
    }
    

    return (
        <div className='tdFrame mt-1'>
            {
                child.map((val,index)=>{
                    return ( 
                        <div className='mt-1' key={index}>
                            <div>{`Child ${index+1}:`}</div>
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
                                onClick={()=>removeChild(index)}>❌
                            </span>
                        </div>
                    )
                })
                
            }
            <div className='addBtn'>
                <button className='mt-4' type='button' onClick={addNewChild}>+ ADD NEW Child</button>
            </div>
        </div>
    )
}
