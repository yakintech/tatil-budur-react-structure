import React, { useEffect, useState } from 'react'
import { ProductService } from '../../../../network/services/product/ProductService'
import { ProductVM } from '../../../../models/product'

function List() {

  const [products, setproducts] = useState<ProductVM[]>([])

  let productService = new ProductService()

  let productsArray : ProductVM[] = []

  useEffect(() => {

    productService.getAll()
      .then(res => {
       
        setproducts(res.data)

        // res.data.forEach((element: any) => {
        //     let newProduct : ProductVM = {
        //       id: element.id,
        //       name: element.name,
        //       unitPrice: element.unitPrice,
        //       unitsInStock: element.unitsInStock,
        //       taxPrice : (element.unitPrice * 1.2)
        //     }

        //     productsArray.push(newProduct);

            
        // });
      })

  }, [])


  return (<>
    <ul>
      {
        products.map(item => <li key={item.id}>{item.name} - {item.unitPrice}</li>)
      }
    </ul>
  </>)
}

export default List