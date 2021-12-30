import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className='row'>
                <div className="col-4"></div>
                
                <div className="col-4 mt-4">
                    <center>
                        <div  className='mt-2'><input type='email' placeholder='Enter your email' /></div>   
                        <div className='mt-2'><input type='password' placeholder='Enter your password' /></div>
                        <div><Link to={"/forgot_password"}>Forgot Password?</Link></div>
                        <div>Don't have an account? <Link to={"/signup"}>Sign up</Link></div>
                        <button type="submit" className='mt-4'>Login</button>
                    </center>
                </div>
                <div className="col-4"></div>
            </div>
        </>
    )
}
