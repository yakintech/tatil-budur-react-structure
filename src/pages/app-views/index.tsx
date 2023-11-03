import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './product'
import Home from './home'

function AppViews() {
  return (<>
    <Routes>
        <Route
            path='/product/*'
            element={<Product/>}
        />
          <Route
            path='/home/*'
            element={<Home/>}
        />
    </Routes>
  </>
  )
}

export default AppViews