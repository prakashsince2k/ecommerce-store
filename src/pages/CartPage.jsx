import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartPage = () => {

    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart
    } = useContext(CartContext)

    const grandTotal = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)

    if (cart.length === 0) {

        return (
            <div className="empty-cart">

                <h2>Your cart is empty</h2>

                <p>Please add some items to get started.</p>

                <Link to="/">
                    Continue Shopping
                </Link>

            </div>
        )
    }

    return (
        <main className="container">

            <div className="cart-header">

                <h2>
                    Grand Total: ${grandTotal.toFixed(2)}
                </h2>

                <button onClick={clearCart}>
                    Clear Cart
                </button>

            </div>

            <div className="cart-list">

                {cart.map((cartItem) => (

                    <div
                        className="cart-item"
                        key={cartItem.id}
                    >

                        <img
                            src={cartItem.image}
                            alt={cartItem.title}
                        />

                        <div>

                            <h3>{cartItem.title}</h3>

                            <p>
                                ${cartItem.price.toFixed(2)}
                            </p>

                            <p>
                                Quantity: {cartItem.quantity}
                            </p>

                            <div className="quantity-buttons">

                                <button
                                    onClick={() =>
                                        increaseQuantity(cartItem)
                                    }
                                >
                                    +
                                </button>

                                <button
                                    onClick={() =>
                                        decreaseQuantity(cartItem)
                                    }
                                >
                                    -
                                </button>

                                <button
                                    onClick={() =>
                                        removeItem(cartItem)
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </main>
    )
}

export default CartPage