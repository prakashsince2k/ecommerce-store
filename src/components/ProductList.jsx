import React, { useEffect, useState } from 'react'
import getProducts from '../services/getProducts'
import ProductCard from './ProductCard'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {

        async function fetchProducts() {

            setLoading(true)
            setError('')

            try {

                const data = await getProducts()
                setProducts(data)

            } catch (error) {

                setError('Something went wrong. Please try again later.')

            } finally {

                setLoading(false)

            }
        }

        fetchProducts()

    }, [])

    const filteredProducts = products.filter((product) =>
        product.title
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    return (
        <main className="container">

            {loading && <h2 className="message">Loading...</h2>}

            {error && <h2 className="message">{error}</h2>}

            {!loading && !error && (
                <>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search Products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {filteredProducts.length > 0 ? (

                        <div className="product-grid">

                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}

                        </div>

                    ) : (

                        <h2 className="message">
                            No products found
                        </h2>

                    )}
                </>
            )}

        </main>
    )
}

export default ProductList