import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const ProductCard = ({ product }) => {

    const { cart, addToCart } = useContext(CartContext)

    const isInCart = cart.find((item) => item.id === product.id)

    return (
        <div className="product-card">

            <img
                src={product.image}
                alt={product.title}
            />

            <h3>{product.title}</h3>

            <p className="price">
                ${product.price.toFixed(2)}
            </p>

            <p>
                Rating: {product.rating.rate}
            </p>

            <button
                onClick={() => addToCart(product)}
                disabled={isInCart}
            >
                {isInCart ? 'Added ✓' : 'Add To Cart'}
            </button>

        </div>
    )
}

export default ProductCard