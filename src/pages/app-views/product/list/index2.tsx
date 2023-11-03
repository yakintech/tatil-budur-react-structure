import React from 'react'
import { useQuery } from 'react-query'
import { ProductService } from '../../../../network/services/product/ProductService'
import { Helmet } from 'react-helmet-async'

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
        <Helmet>
            <title>Tatil Budur - Ürünler</title>
            <meta name='description' content='Tatil Budur ürünleri....' />
        </Helmet>

        <ul>
            {
                data?.data?.map((item: any, key: any) => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default List2