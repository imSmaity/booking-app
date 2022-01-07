
import NewInfant from "./NewInfant"


export default function Infant({infantCount,addNewInfant,infantValue,setInfantValue}){
    

    function changeValue(e,infantNumber){
        setInfantValue({...infantValue,[infantNumber]:{...infantValue[infantNumber],[e.target.name]:e.target.value}})
    }

    return (
        <div className='tdFrame mt-1'>
            <div>{
                infantCount.map((val,index)=>{
                    return ( 
                        <div className='mt-1' key={index}>
                            <div>{`INFANT ${index+1}:`}</div>
                            <NewInfant
                                onChange={(e)=>changeValue(e,`infant${index+1}`)}
                                textTypeValueName1={`ifmName${index+1}`}
                                textTypeValueName2={`ilname${index+1}`}
                                radioBtnName={`igender${index+1}`}
                            />
                            
                        </div>
                    )
                })
            }</div>
            <div className='addBtn'>
                <button className='mt-4' type='button' onClick={addNewInfant}>+ ADD NEW INFANT</button>
            </div>
        </div>
    )
}