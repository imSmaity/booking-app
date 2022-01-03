function getName(){
    return JSON.parse(localStorage.getItem("mbuser")).name
}

export const initialstate=()=>{
    return localStorage.getItem("mbuser")?{type:"USER",name:getName(),payload:true}:{payload:false}
}

export default  function reducer(action,state){
    if(action.type==="true"){
        return state
    }
    return state
}