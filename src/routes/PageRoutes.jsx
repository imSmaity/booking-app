import React, { createContext, useEffect, useReducer, useState } from 'react'
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
    ConfirmTicket,
    ConfirmHotelBooking,
    MyTrip,
    Profile
} from '../pages/pages'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import reducer, { initialstate } from '../hooks/UseReducer'

const UserState=createContext(null)
export const InputDate=createContext(null)
export const GuestDetails=createContext(null)

function Redirect({to}){
    const navigate=useNavigate()
    useEffect(()=>{
        navigate(to)   
    })
    return null
}


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
                            <Route path="signup" element={state.payload? <Redirect to={-1}/>:<SignUp/>}/>
                            <Route path="login" element={state.payload? <Redirect to={-1}/>:<Login/>}/>
                            <Route path="forgot_password" element={<ForgotPassword/>}/>
                            <Route path="admin" element={<Admin/>}/>
                            <Route path="my_trip" element={state.payload? <MyTrip/>:<Redirect to='/login'/>}/>
                            <Route path="ticket_confirm" element={state.payload?<ConfirmTicket/>:<Redirect to='/login'/>}/>
                            <Route path="profile" element={state.payload?<Profile/>:<Redirect to='/login'/>}/>
                            <Route path="hotel_book_confirm" element={state.payload?<ConfirmHotelBooking/>:<Redirect to='/login'/>}/>
                            <Route path="admin/hotelsDB" element={<HotelDataStore/>}/>
                            <Route path="hotels/:searchId/:query" element={<Hotels/>}/>
                            <Route path="flights/:classId/:searchId/:query" element={<Flights/>}/>
                            <Route path="hotels/:searchId/:query/:hotelId" element={<RoomSelect/>}/>
                            <Route path="flights/:classId/:searchId/:query/:flightId" element={state.payload? <FlightTicketBook/>:<Redirect to='/login'/>}/>
                            <Route path="hotels/:searchId/:query/:hotelId/payment" element={state.payload? <BookHotel/>:<Redirect to='/login'/>}/>
                            <Route path="*" element={<h1>Page Not Found</h1>}/>
                        </Routes>
                    </GuestDetails.Provider>
                </InputDate.Provider>
            </UserState.Provider>
        </BrowserRouter>
    )
}

export default PageRoutes
export {UserState} 
