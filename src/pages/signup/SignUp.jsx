import React from 'react'

export default function SignUp() {
    return (
        <>
            <div className='row'>
                <div className="col-4"></div>
                
                <div className="col-4 mt-4">
                    <center>
                        <div  className='mt-2'><input type='email' placeholder='Enter your Name' /></div> 
                        <div  className='mt-2'><input type='date' placeholder='What is your date of birth?'/></div> 
                        <div  className='mt-2'><input type='email' placeholder='Enter your email' /></div>   
                        <div className='mt-2'><input type='password' placeholder='Enter password' /></div>
                        <div className='mt-2'><input type='number' placeholder='Re-enter password' /></div>
                        <button type="submit" className='mt-4'>Submit</button>
                    </center>
                </div>
                <div className="col-4"></div>
            </div>
        </>
    )
}
