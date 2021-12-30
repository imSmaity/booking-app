import React, { useRef, useState } from 'react'

export default function ForgotPassword() {
    const [validUser,setValidUser]=useState(false)
    const email=useRef(null)
    const dob=useRef(null)
    const password=useRef(null)
    const rePassword=useRef(null)
    function findUser(){setValidUser(true)}
    function setNewPassword(){}

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
                            <input type="password" ref={rePassword} />
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
