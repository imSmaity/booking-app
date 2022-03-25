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
                <h3 id='brand'>myDestination</h3>
            </Link>
            <div className='col-lg-5 col-3' id='ts'>
                <Link to={'/my_trip'} id='ddd'>My trip</Link>
            </div>
                {
                    state.payload?
                    <>
                        <div  className='col-lg-2 col-4 btnls' id='ts'>
                            <Link to={"/profile"} id='ddd'>{state.name}</Link>
                            <button type='button' onClick={logout} id='sl'>Logout</button>
                        </div>
                    </>:
                    <div  className='col-lg-2 col-5 btnls'>
                        <Link to={"/login"}><button type='button '>Login</button></Link>
                        <Link to={"/signup"}><button type='button' >Signup</button></Link>
                    </div>
                }
        </div>
    )
}
