import React, { useEffect, useState } from 'react'
import { ProductService } from './network/services/product/ProductService'
import { Link, Route, Routes } from 'react-router-dom'
import AppViews from './pages/app-views'

function App() {


  return (<>
  <ul>
    <li><Link to='/product'>Products</Link></li>
    <li><Link to='/product/list2'>Products-2</Link></li>

    <li><Link to='/product/add'>Add Product</Link></li>
  </ul>
  <Routes>
    <Route path="*" element={<AppViews/>} />
  </Routes>
  </>
  )
}

export default App