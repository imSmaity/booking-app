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
    HotelDataStore,
    RoomSelect,
    BookHotel,
    ConfirmTicket
} from '../pages/pages'
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import reducer, { initialstate } from '../hooks/UseReducer'

const UserState=createContext(null)
export const InputDate=createContext(null)
export const GuestDetails=createContext(null)

function PageRoutes() {

    const [state, dispatch] = useReducer(reducer, initialstate())
    const [date,setDate]=useState({travelDate:new Date(),checkInDate:new Date(),checkOutDate:new Date()})
    const [guest,setGuest]=useState([{fname:'',lname:''}])
   
    return (
        <BrowserRouter>
            <UserState.Provider value={{state,dispatch}}>
                <InputDate.Provider value={{date,setDate}}>
                    <GuestDetails.Provider value={{guest,setGuest}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="signup" element={<SignUp/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="forgot_password" element={<ForgotPassword/>}/>
                            <Route path="admin" element={<Admin/>}/>
                            <Route path="ticket_confirm" element={<ConfirmTicket/>}/>
                            <Route path="admin/hotelsDB" element={<HotelDataStore/>}/>
                            <Route path="hotels/:searchId/:query" element={<Hotels/>}/>
                            <Route path="flights/:classId/:searchId/:query" element={<Flights/>}/>
                            <Route path="hotels/:searchId/:query/:hotelId" element={<RoomSelect/>}/>
                            <Route path="flights/:classId/:searchId/:query/:flightId" element={<FlightTicketBook/>}/>
                            <Route path="hotels/:searchId/:query/:hotelId/payment" element={<BookHotel/>}/>
                            
                        </Routes>
                    </GuestDetails.Provider>
                </InputDate.Provider>
            </UserState.Provider>
        </BrowserRouter>
    )
}

export default PageRoutes
export {UserState} 
