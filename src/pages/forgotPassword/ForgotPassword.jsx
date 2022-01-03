import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function setNewData(userData,newPassword,navigate){
    axios.post(process.env.REACT_APP_UPDATE_USER,{
        _id:userData.email,
        name:userData.name,
        dob:userData.dob,
        email:userData.email,
        password:newPassword,
        flightBookings:userData.flightBookings,
        hotelBookings:userData.hotelBookings
    })
    .then(res=>{
        if(res.data.success){
            alert("Your password has been reset successfully")
            navigate('/login')
        }
    })

}



export default function ForgotPassword() {
    const [validUser,setValidUser]=useState(false)
    const [userData,setUserData]=useState("")
    const navigate=useNavigate()
    const email=useRef(null)
    const dob=useRef(null)
    const password=useRef(null)
    const rePassword=useRef(null)

    function findUser(){
        if(email.current.value!=="" && dob.current.value!==""){
            axios.post(process.env.REACT_APP_SEARCH_USER_URL,{email:email.current.value})
            .then(
                (res)=>{
                    if(res.data!==""){
                        if(res.data.dob===dob.current.value){
                            setUserData(res.data)
                            setValidUser(true)
                        }
                        else{
                            alert("Your email or date of birth is incorrect, please try again.")
                        }
                    }
                    else{
                        alert("Your email or date of birth is incorrect, please try again.")
                    }
                }
            )
        }
        else{
            alert("please fill all the input fields!")
        }
    }
    
    function setNewPassword(){
        if(password.current.value!=="" && rePassword.current.value!==""){
            if(password.current.value===rePassword.current.value){
                setNewData(userData,password.current.value,navigate)
            }
            else{
                alert('Re-entered password are wrong!')
            }
        }
        else{
            alert("please fill all the input fields!")
        }
    }

    return (
        <div>
            <center>
                <h3 >My destination</h3>
                {!validUser?
                    <>
                        <div className='mt-5'>
                            <label>E-mail:</label>
                            <input type="email" ref={email}/>
                        </div>
                        <div className='mt-2'>
                            <label>What is your date of birth?</label>
                            <input type="date" ref={dob}/>
                        </div>
                        <div className='mt-3'>
                            <button type="button" className="btn btn-primary btn-sm" onClick={findUser}>Check</button>
                        </div>
                    </>:
                    <>
                        <div className='mt-5'>
                            <label>New Password:</label>
                            <input type="password" ref={password} />
                        </div>
                        <div className='mt-2'>
                            <label>Re-enter Password:</label>
                            <input type="text" ref={rePassword} />
                        </div>
                        <div className='mt-3'>
                            <button type="submit" className="btn btn-dark btn-sm" onClick={setNewPassword}>Submit</button>
                        </div>
                    </>
                }
                
            </center>
        </div>
    )
}
