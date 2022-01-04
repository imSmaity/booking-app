import React, { createContext, useReducer } from 'react'
import { 
    Flights,
    Hotels,
    ForgotPassword,
    Home,
    Login,
    SignUp, 
    Admin
} from '../pages/pages'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reducer, { initialstate } from '../hooks/UseReducer'

const UserState=createContext(null)
function PageRoutes() {
    const [state, dispatch] = useReducer(reducer, initialstate())

    return (
        <BrowserRouter>
            <UserState.Provider value={{state,dispatch}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="forgot_password" element={<ForgotPassword/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="flights/:classId/:searchId" element={<Flights/>}/>
                    <Route path="hotels/:searchId" element={<Hotels/>}/>
                </Routes>
            </UserState.Provider>
        </BrowserRouter>
    )
}

export default PageRoutes
export {UserState} 
