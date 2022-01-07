import { Input } from "../../../components/components"

export default function NewAdult({onChange,textTypeValueName1,textTypeValueName2,radioBtnName}){
    const adultAttribute=[
        {
            placeholder:'First & Middle Name',
            type:'text',
            name:textTypeValueName1
        },
        {
            placeholder:'Last Name',
            type:'text',
            name:textTypeValueName2
        },
        {
            type:'radio',
            value:'MALE',
            name:radioBtnName
        },
        {
            type:'radio',
            value:'FEMALE',
            name:radioBtnName
        }
    ]
    return(
        adultAttribute.map((val,index)=>{
            if(val.type==='radio'){
                return(
                    <span key={index} className='radioBtn'>
                        <label>{val.value}</label>
                        <Input 
                            type={val.type} 
                            value={val.value}
                            className='radioBtn' 
                            name={val.name}
                            onChange={onChange}
                        />
                    </span>
                )
            }
            else{
                return <Input 
                    key={index} 
                    className='radioBtn mt-2' 
                    type={val.type} 
                    placeholder={val.placeholder}
                    name={val.name} 
                    onChange={onChange}
                />
            }
        })
    )
}