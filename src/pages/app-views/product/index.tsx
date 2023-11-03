import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Add from './add'
import List2 from './list/index2'

function Product() {
  return (<>
    <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/list2' element={<List2/>} />

        <Route path='/add' element={<Add/>} />
    </Routes>
  </>)
}

export default Product