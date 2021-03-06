import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loading } from '../../components/components'
import { UserState } from '../../routes/PageRoutes'

export default function Login() {
    const {dispatch}=useContext(UserState)
    const [loading,setLoading]=useState(false)
    const [user,setUser]=useState({email:'admin@gmail.com',password:'adminadmin'})
    const navigate=useNavigate()
    function changeData(e){
        setUser({...user,[e.target.name]:e.target.value})
    }

    const login=()=>{
        if(user.email!=="" && user.password!==""){
            axios.post(process.env.REACT_APP_SEARCH_USER_URL,{email:user.email})
            .then(
                (res)=>{
                    if(res.data!==""){
                        if(res.data.password===user.password){
                            const {name,email,flightBookings,hotelBookings}=res.data
                            const userData={name,email,flightBookings,hotelBookings}
                            localStorage.setItem('mbuser',JSON.stringify(userData))
                            dispatch({type:"USER",name,payload:true})
                            setLoading(false)
                            navigate('/')
                        }
                        else{
                            alert("Your email or password is incorrect, please try again.")
                            setLoading(false)
                        }
                    }
                    else{
                        alert("Your email or password is incorrect, please try again.")
                        setLoading(false)
                    }
                }
            )
        }
        else{
            alert("please fill all the input fields!")
            setLoading(false)
        }
    }
    return (
        <>
            <div className='row'>
                <div className="col-md-4"></div>
                
                <div className="col-12 mt-4">
                    <center>
                        <div  className='mt-2'><input type='email' name='email' value={user.email} placeholder='Enter your email' onChange={e=>changeData(e)}/></div>   
                        <div className='mt-2'><input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={e=>changeData(e)} /></div>
                        <div><Link to={"/forgot_password"}>Forgot Password?</Link></div>
                        <div>Don't have an account? <Link to={"/signup"}>Sign up</Link></div>
                        {
                            !loading?
                            <>
                                <button 
                                    type="submit" 
                                    className='mt-4' 
                                    onClick={()=>{
                                        setLoading(true)
                                        login()
                                    }}>
                                    Login
                                </button> 
                                <button type='button' className='mt-4 ms-3' onClick={()=>{navigate(-1)}}>Cancel</button>
                            </>:
                            <button className='mt-4'><Loading/></button>
                        }
                    </center>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    )
}
