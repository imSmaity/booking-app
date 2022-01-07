
import NewChild from "./NewChild"


export default function Child({childCount,addNewChild,childValue,setChildValue}){
    
    
    function changeValue(e,childNumber){
        setChildValue({...childValue,[childNumber]:{...childValue[childNumber],[e.target.name]:e.target.value}})
    }
    return (
        <div className='tdFrame mt-1'>
            <div>{
                childCount.map((val,index)=>{
                    return ( 
                        <div className='mt-1' key={index}>
                            <div>{`CHILD ${index+1}:`}</div>
                            <NewChild
                                onChange={(e)=>changeValue(e,`child${index+1}`)}
                                textTypeValueName1={`cfmName${index+1}`}
                                textTypeValueName2={`clname${index+1}`}
                                radioBtnName={`cgender${index+1}`}
                            />
                        </div>
                    )
                })
            }</div>
            <div className='addBtn'>
                <button className='mt-4' type='button' onClick={addNewChild}>+ ADD NEW CHILD</button>
            </div>
        </div>
    )
}
