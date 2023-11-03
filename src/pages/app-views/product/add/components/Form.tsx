import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { queryClient } from '../../../../..'
import { ProductService } from '../../../../../network/services/product/ProductService'

function Form() {

  const [name, setName] = useState('')
  const [unitPrice, setunitPrice] = useState('')
  const [unitsInStock, setunitsInStock] = useState('')

  const mutation = useMutation({
    mutationFn: (product: any) => {
      let productService = new ProductService();
      return productService.add(product)
    },
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })


  const add = () => {

    let newProduct = {
      name,
      unitPrice,
      unitsInStock
    }

    mutation.mutate(newProduct)
  }

  const add2 = () => {
    let newProduct = {
      name,
      unitPrice,
      unitsInStock
    }
    let productService = new ProductService();
    productService.add(newProduct)
    
    
  }
  const { isLoading } = mutation

  return (<>
    {
      isLoading == true ? <h1>loading..</h1> : <>
        <div>
          <label htmlFor="">Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Unit Price</label>
          <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Stock</label>
          <input type='text' onChange={(e) => setunitsInStock(e.target.value)} />
        </div>
        <div>
          <button onClick={add}>Add - Mutation</button>
          <button onClick={add2}>Add</button>

        </div>
      </>
    }
  </>)
}

export default Form