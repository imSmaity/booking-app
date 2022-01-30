import React, { useState } from 'react'
import { Input } from '../../components/components'
import axios from 'axios'
import './signup.css'
import { useNavigate } from 'react-router-dom'

const attributes=[

    {
        type: 'text',
        name:'name', 
        placeholder:'Enter your Name'
    },
    {
        type:'date',
        name:'dob', 
        placeholder:'What is your date of birth?'    
    },
    {
        type:'email',
        name:'email', 
        placeholder:'Enter your email'
    },
    {
        type:'password',
        name:'password',
        placeholder:'Enter password'
    },
    {
        type:'text',
        name:'rPassword', 
        placeholder:'Re-enter password'
    }

]

function submitData(userData,msg,navigate){
    axios.post(process.env.REACT_APP_USER_URL,userData)
    .then(
        alert(msg),
        navigate('/login')
    )
}


function validation(userData){
    if(userData.name !== '' && userData.dob !== '' && userData.email !== '' && 
    userData.password !== '' && userData.rPassword !== '' ){
        if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(userData.email)){
            if(userData.password.length>=8){
                if(userData.password===userData.rPassword){
                    return {valid:true,msg:'Successfully registered'}
                }
                else{
                    return {valid:false,msg:'Re-entered password are wrong!'}
                }
            }
            else{
                return {valid:false,msg:'Please enter minimum 8 characters password'}
            }
        }
        else{
            return {valid:false,msg:'Invalid email address'}
        }
    }
    else{
        return {valid:false,msg:'please fill all the input fields'}
    }
}


export default function SignUp() {
    const [userData,setUserData]=useState({name:'',dob:'',email:'',password:'',rPassword:''})
    const navigate=useNavigate()
    function inputHandle(e){
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    function signup(){
        const validation_state=validation(userData)
        if(validation_state.valid){
            axios.post(process.env.REACT_APP_SEARCH_USER_URL,{email:userData.email})
            .then(res=>{ 
                if(res.data===""){
                    submitData(userData,validation_state.msg,navigate)
                }
                else{
                    alert("Email address is already registered")
                }
            })
        }
        else{
            alert(validation_state.msg)
        }
    }
    return (
        <>
            <div className='row'>
                <div className="col-4"></div>
                
                <div className="col-4 mt-4 siInput">
                    <center>
                        {
                            attributes.map((attribute,index)=>{
                                return (
                                    <div  className='mt-2' key={index}>
                                        <Input 
                                            type={attribute.type} 
                                            name={attribute.name}
                                            placeholder={attribute.placeholder}
                                            onChange={(e)=>inputHandle(e)}
                                        />
                                    </div> 
                                )
                            })
                        }
                        <button type="submit" className='mt-4' onClick={signup}>Submit</button>
                    </center>
                </div>
                <div className="col-4"></div>
            </div>
        </>
    )
}
