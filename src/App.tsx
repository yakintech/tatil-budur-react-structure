import React, { CSSProperties, useEffect, useState } from 'react'
import { ProductService } from './network/services/product/ProductService'
import { Link, Route, Routes } from 'react-router-dom'
import AppViews from './pages/app-views'
import { Title } from './components/core-components/h1/Title'

function App() {

  var ulStyle : CSSProperties = {
    display:'flex',
    justifyContent:"space-between"
  }

  return (<>
  <Title>TATİLBUDUR</Title>
  <ul style={ulStyle}>
    <li><Link to='/product'>Products</Link></li>
    <li><Link to='/product/list2'>Products-2</Link></li>
    <li><Link to='/product/add'>Add Product</Link></li>
    <li><Link to='/home'>Home</Link></li>
  </ul>
  <Routes>
    <Route path="*" element={<AppViews/>} />
  </Routes>
  </>
  )
}

export default App