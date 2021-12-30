import React from 'react'
import { Header } from '../../components/components'
import './home.css'
import SearchFrame from './searchFrame/SearchFrame'

function Home() {
    return (
        <div className='row'>
            <div className='col-12 hac'>
                <Header/>
            </div>
            <div className='col-12'>
                <SearchFrame/>
            </div>
        </div>
    )
}

export default Home
