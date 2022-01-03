import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const email=useRef(null)
    const password=useRef(null)
    const navigate=useNavigate()

    const login=()=>{
        if(email.current.value!=="" && password.current.value!==""){
            axios.post(process.env.REACT_APP_SEARCH_USER_URL,{email:email.current.value})
            .then(
                (res)=>{
                    if(res.data!==""){
                        if(res.data.password===password.current.value){
                            const {name,email,flightBookings,hotelBookings}=res.data
                            const user={name,email,flightBookings,hotelBookings}
                            localStorage.setItem('mbuser',JSON.stringify(user))
                            navigate('/')
                        }
                        else{
                            alert("Your email or password is incorrect, please try again.")
                        }
                    }
                    else{
                        alert("Your email or password is incorrect, please try again.")
                    }
                }
            )
        }
        else{
            alert("please fill all the input fields!")
        }
    }
    return (
        <>
            <div className='row'>
                <div className="col-md-4"></div>
                
                <div className="col-12 mt-4">
                    <center>
                        <div  className='mt-2'><input type='email' placeholder='Enter your email' ref={email}/></div>   
                        <div className='mt-2'><input type='password' placeholder='Enter your password' ref={password} /></div>
                        <div><Link to={"/forgot_password"}>Forgot Password?</Link></div>
                        <div>Don't have an account? <Link to={"/signup"}>Sign up</Link></div>
                        <button type="submit" className='mt-4' onClick={login}>Login</button>
                    </center>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    )
}
