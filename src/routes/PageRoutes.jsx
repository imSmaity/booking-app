import React, { createContext, useReducer, useState } from 'react'
import { 
    Flights,
    Hotels,
    ForgotPassword,
    Home,
    Login,
    SignUp, 
    Admin,
    FlightTicketBook,
    HotelDataStore
} from '../pages/pages'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reducer, { initialstate } from '../hooks/UseReducer'

const UserState=createContext(null)
export const InputDate=createContext(null)
function PageRoutes() {
    const [state, dispatch] = useReducer(reducer, initialstate())
    const [date,setDate]=useState({travelDate:'',checkInDate:'',checkOutDate:''})

    return (
        <BrowserRouter>
            <UserState.Provider value={{state,dispatch}}>
                <InputDate.Provider value={{date,setDate}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="forgot_password" element={<ForgotPassword/>}/>
                        <Route path="admin" element={<Admin/>}/>
                        <Route path="admin/hotelsDB" element={<HotelDataStore/>}/>
                        <Route path="hotels/:searchId" element={<Hotels/>}/>
                        <Route path="flights/:classId/:searchId" element={<Flights/>}/>
                        <Route path="flights/:classId/:searchId/:flightId" element={<FlightTicketBook/>}/>
                        
                    </Routes>
                </InputDate.Provider>
            </UserState.Provider>
        </BrowserRouter>
    )
}

export default PageRoutes
export {UserState} 
