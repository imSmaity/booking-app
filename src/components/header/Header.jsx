import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserState } from '../../routes/PageRoutes'
import './header.css'

export default function Header() {
    const {state,dispatch}=useContext(UserState)
    function logout(){
        localStorage.removeItem("mbuser")
        dispatch({payload:false})
    }
    return (
        <div className='row'>
            <Link to="/"  className='col-4' style={{textDecoration:'none'}}>
                <h3 >My destination</h3>
            </Link>
            <div className='col-2'><p >My trip</p></div>
                {
                    state.payload?
                    <>
                        <div  className='col-3 btnls'>
                            <Link to={"/profile"}><div style={{textAlign:'right',fontWeight:'bold'}}>{state.name}</div></Link>
                        </div>
                        <div  className='col-3 btnls'>
                            <button type='button' onClick={logout}>Logout</button>
                        </div>
                    </>:
                    <div  className='col-6 btnls'>
                        <Link to={"/login"}><button type='button '>Login</button></Link>
                        <Link to={"/signup"}><button type='button' >Signup</button></Link>
                    </div>
                }
        </div>
    )
}
