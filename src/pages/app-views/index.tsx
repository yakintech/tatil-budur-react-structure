import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './product'

function AppViews() {
  return (<>
    <Routes>
        <Route
            path='/product/*'
            element={<Product/>}
        />
    </Routes>
  </>
  )
}

export default AppViews