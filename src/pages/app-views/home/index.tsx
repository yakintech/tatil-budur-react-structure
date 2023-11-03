import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
function Home() {
  

    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    )
}

export default Home

