import React from 'react'
import { ForgotPassword, Login, SignUp } from '../pages/pages'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot_password" element={<ForgotPassword/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes
