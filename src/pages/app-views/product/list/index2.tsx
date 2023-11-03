import React from 'react'
import { useQuery } from 'react-query'
import { ProductService } from '../../../../network/services/product/ProductService'

function List2() {
    const { isLoading, error, data } = useQuery('fetchProducts', () => {

        let productService = new ProductService()
        return productService.getAll()
    },
        {
            // staleTime: 130000
            // refetchInterval: 6000,
        }

    )

    return (<>
        <ul>
            {
                data?.data?.map((item: any, key: any) => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default List2