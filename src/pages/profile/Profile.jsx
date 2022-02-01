
import axios from 'axios'
import {useContext, useState } from 'react'
import { Header, Loading } from '../../components/components'
import { UserState } from '../../routes/PageRoutes'

import './profile.css'


export default function Profile(){
    const USER_STORAGE=JSON.parse(localStorage.getItem("mbuser"))
    const [editProfile,setEditProfile]=useState(false)
    const [loading,setLoading]=useState(false)
    const [name,setName]=useState(USER_STORAGE.name)
    const {state,dispatch}=useContext(UserState)

    function changeData(e){
        setName(e.target.value)
    }
    
    
    function editData(){
        setEditProfile(true)
    }  
    function submitEditData(){
        USER_STORAGE.name=name
        axios.post(process.env.REACT_APP_UPDATE_USER,USER_STORAGE)
        .then(()=>{
            setEditProfile(false)
            setLoading(false)
            dispatch({type:'USER',payload:true,name:USER_STORAGE.name})
            localStorage["mbuser"]=JSON.stringify(USER_STORAGE)
        })
    } 
    return(
        <div className="row">
            <div className='col-12 hac'><Header/></div>
            <div className="col-12 mt-2">
            {
                editProfile?
                <div className="row container mt-2">
                    <div className="col-12">
                        Name: <input type='text' value={name} onChange={(e)=>changeData(e)}/>
                    </div>
                    <div className="col-12 mt-2">
                        E-mail: <input type='email' value={USER_STORAGE.email} readOnly/>
                    </div>
                    <div className="col-12 mt-3">
                    {
                        !loading?
                        <button 
                            type='button' 
                            className='btn btn-secondary btn-sm' 
                            onClick={()=>{
                                setLoading(true)
                                submitEditData()
                            }}>
                            Submit
                        </button>:
                        <button className='btn btn-secondary btn-sm'><Loading/></button>
                    }
                        
                        <button type='button' className='btn btn-secondary btn-sm ms-2' onClick={()=>setEditProfile(false)}>Cancel</button>
                    </div>
                </div>:
                <div className="row container mt-2">
                    <div className="col-12">
                        Name: {state.name}
                    </div>
                    <div className="col-12 mt-1">
                        E-mail: {USER_STORAGE.email}
                    </div>
                    <div className="col-12 mt-3">
                        <button type='button' className='btn btn-secondary btn-sm'  onClick={editData}>Edit Profile</button>
                    </div>
                </div>

            }
                
            </div>
        </div>
    )
}

