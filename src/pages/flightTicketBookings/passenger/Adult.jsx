
import NewAdult from "./NewAdult"


export default function Adult({adultCount,addNewAdult,adultValue,setAdultValue}){
    
    
    function changeValue(e,adultNumber){
        setAdultValue({...adultValue,[adultNumber]:{...adultValue[adultNumber],[e.target.name]:e.target.value}})
    }

    return (
        <div className='tdFrame mt-1'>
            <div>{
                adultCount.map((val,index)=>{
                    return ( 
                        <div className='mt-1' key={index}>
                            <div>{`ADULT ${index+1}:`}</div>
                            <NewAdult
                                onChange={(e)=>changeValue(e,`adult${index+1}`)}
                                textTypeValueName1={`afmName${index+1}`}
                                textTypeValueName2={`alname${index+1}`}
                                radioBtnName={`agender${index+1}`}
                            />

                        </div>
                    )
                })
            }</div>
            <div className='addBtn'>
                <button className='mt-4' type='button' onClick={addNewAdult}>+ ADD NEW ADULT</button>
            </div>
        </div>
    )
}