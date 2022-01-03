import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <div className='row'>
            <h3 className='col-6'>My destination</h3>
            <div className='col-2'><p >My trip</p></div>
            <div  className='col-4 btnls'>
                <Link to={"/login"}><button type='button '>Login</button></Link>
                <Link to={"/signup"}><button type='button' >Signup</button></Link>
            </div>
        </div>
    )
}
